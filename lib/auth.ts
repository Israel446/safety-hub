import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import type { Profile } from '@/lib/types';
export async function requireProfile(opts: { allowPinChange?: boolean } = {}) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');
  const { data: profile } = await supabase.from('profiles').select('id,staff_id,full_name,role,active,must_change_pin,created_at').eq('id', user.id).single();
  if (!profile || !profile.active) redirect('/login?error=inactive');
  if (profile.must_change_pin && !opts.allowPinChange) redirect('/pin?first=1');
  return { profile: profile as Profile, supabase };
}
export async function requireAdmin() {
  const result = await requireProfile();
  if (result.profile.role !== 'admin') redirect('/');
  return result;
}
