// Runs during every Vercel build (see "build" in package.json):
// 1. applies any database migration not yet applied (supabase/migrations/*.sql)
// 2. creates the first administrator if INITIAL_ADMIN is set and no admin exists yet
// Skips quietly when DATABASE_URL is not set (e.g. on your own computer).
import { readFileSync, readdirSync } from 'node:fs';
import postgres from 'postgres';
import { createClient } from '@supabase/supabase-js';

const url = process.env.DATABASE_URL;
if (!url) { console.log('[migrate] DATABASE_URL not set, skipping database setup'); process.exit(0); }
const sql = postgres(url, { ssl: 'require', max: 1, onnotice: () => {}, prepare: false });
const dir = new URL('../supabase/', import.meta.url);

try {
  // Safety: never run the hub's setup on a database that already belongs to another app (e.g. the risk assessment app).
  const [state] = await sql`select to_regclass('public._hub_migrations') is not null as ours,
    to_regclass('public.profiles') is not null as has_profiles,
    to_regclass('public.hub_settings') is not null as legacy_hub,
    to_regclass('public._migrations') is not null as legacy_ledger`;
  // Databases set up by the first version of this runner kept their history in public._migrations.
  // hub_settings exists only in the Safety Hub, so it identifies that history as ours; adopt it.
  if (!state.ours && state.legacy_hub && state.legacy_ledger) {
    await sql.begin(async tx => {
      await tx`create table public._hub_migrations (name text primary key, applied_at timestamptz not null default now())`;
      await tx`insert into public._hub_migrations (name, applied_at) select name, applied_at from public._migrations`;
    });
    console.log('[migrate] adopted existing Safety Hub migration history');
  } else if (!state.ours && state.has_profiles) {
    throw new Error('This Supabase database already has another app\'s tables (public.profiles exists). Use a separate, new Supabase project for the Safety Hub.');
  }
  await sql`create table if not exists public._hub_migrations (name text primary key, applied_at timestamptz not null default now())`;
  await sql`alter table public._hub_migrations enable row level security`;
  const done = new Set((await sql`select name from public._hub_migrations`).map(r => r.name));
  const files = readdirSync(new URL('migrations/', dir)).filter(f => f.endsWith('.sql')).sort().map(f => ['migrations/' + f, f]);

  for (const [path, name] of files) {
    if (done.has(name)) continue;
    process.stdout.write(`[migrate] applying ${name} ... `);
    const text = readFileSync(new URL(path, dir), 'utf8');
    await sql.begin(async tx => {
      await tx.unsafe(text);
      await tx`insert into public._hub_migrations (name) values (${name})`;
    });
    console.log('done');
  }

  const initial = process.env.INITIAL_ADMIN; // "STAFFID|Full Name|PIN|email"
  if (initial) {
    const [admins] = await sql`select count(*)::int n from public.profiles where role = 'admin'`;
    if (admins.n === 0) {
      const [staffId, fullName, pin, email] = initial.split('|').map(s => (s ?? '').trim());
      if (!/^[a-zA-Z0-9._-]+$/.test(staffId || '') || !fullName || !/^\d{6,12}$/.test(pin || '') || /^(\d)\1+$/.test(pin) || [...pin].every((x,i,a) => !i || +x === (+a[i-1]+1)%10) || [...pin].every((x,i,a) => !i || +x === (+a[i-1]+9)%10)) throw new Error('Invalid INITIAL_ADMIN staff ID, name or PIN');
      const domain = process.env.STAFF_EMAIL_DOMAIN || 'staff.safetyhub.local';
      const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
      const { data, error } = await sb.auth.admin.createUser({
        email: `${staffId.toLowerCase().replace(/[^a-z0-9._-]/g, '')}@${domain}`, password: pin, email_confirm: true,
      });
      if (error) throw new Error('could not create first admin: ' + error.message);
      try {
        await sql`insert into public.profiles (id, staff_id, full_name, role, email, must_change_pin)
                  values (${data.user.id}, ${staffId.toUpperCase()}, ${fullName}, 'admin', ${email?.toLowerCase() || null}, true)`;
      } catch (error) {
        await sb.auth.admin.deleteUser(data.user.id);
        throw error;
      }
      console.log(`[migrate] first admin ${staffId.toUpperCase()} created. Remove INITIAL_ADMIN from Vercel now.`);
    }
  }
} catch (e) {
  console.error('[migrate] FAILED:', e.message);
  process.exitCode = 1;
} finally {
  await sql.end();
}
