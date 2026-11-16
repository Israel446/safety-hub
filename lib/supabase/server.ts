import 'server-only';
import { createServerClient } from '@supabase/ssr';
import { createClient as createPlain } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export function createClient() {
  const cookieStore = cookies();
  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (list) => {
        try { list.forEach(({ name, value, options }) => cookieStore.set(name, value, options)); }
        catch { /* called from a Server Component; middleware refreshes the session */ }
      },
    },
  });
}

// Service-role client: bypasses security rules. Server-side only, for admin tasks.
export function createAdminClient() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set');
  return createPlain(process.env.NEXT_PUBLIC_SUPABASE_URL!, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

// A throwaway client used only to check someone's PIN without changing who is signed in.
export function createCheckClient() {
  return createPlain(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export const staffEmail = (staffId: string) =>
  `${staffId.trim().toLowerCase().replace(/[^a-z0-9._-]/g, '')}@${process.env.STAFF_EMAIL_DOMAIN || 'staff.safetyhub.local'}`;
