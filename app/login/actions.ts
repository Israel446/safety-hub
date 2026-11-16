 'use server';
import { redirect } from 'next/navigation';
import { createClient, staffEmail } from '@/lib/supabase/server';
export async function signIn(form: FormData) {
  const staff = String(form.get('staff_id') ?? '').replace(/\s+/g, '');
  if (!/^[a-zA-Z0-9._-]+$/.test(staff)) redirect('/login?error=bad');
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword({ email: staffEmail(staff), password: String(form.get('pin') ?? '') });
  if (error) redirect('/login?error=bad');
  const { data: { user } } = await supabase.auth.getUser();
  const { data: profile } = await supabase.from('profiles').select('active').eq('id', user!.id).single();
  if (!profile?.active) { await supabase.auth.signOut(); redirect('/login?error=inactive'); }
  const next = String(form.get('next') ?? '/');
  redirect(next.startsWith('/') && !next.startsWith('//') && !next.includes('\\') ? next : '/');
}
export async function signOut() {
  await createClient().auth.signOut();
  redirect('/login');
}
