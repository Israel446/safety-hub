'use server';
import { redirect } from 'next/navigation';
import { requireProfile } from '@/lib/auth';
import { createAdminClient, createCheckClient, staffEmail } from '@/lib/supabase/server';
import { pinProblem } from '@/lib/pin-rules';

export async function changePin(form: FormData) {
  const { profile, supabase } = await requireProfile({ allowPinChange: true });
  const first = form.get('first') === '1' ? '&first=1' : '';
  const fail = (msg: string): never => redirect(`/pin?err=${encodeURIComponent(msg)}${first}`);
  const current = String(form.get('current') ?? '');
  const pin = String(form.get('pin') ?? '');

  const problem = pinProblem(pin, String(form.get('pin2') ?? ''));
  if (problem) fail(problem);
  if (pin === current) fail('Choose a PIN different from your current one.');

  // Check the current PIN without touching the signed-in session.
  const check = createCheckClient();
  const { error: wrong } = await check.auth.signInWithPassword({ email: staffEmail(profile.staff_id), password: current });
  if (wrong) fail('Your current PIN is wrong.');
  await check.auth.signOut({ scope: 'local' });

  const admin = createAdminClient();
  const { error } = await admin.auth.admin.updateUserById(profile.id, { password: pin });
  if (error) fail('Could not change your PIN. Try again.');
  const { error: profileError } = await admin.from('profiles').update({ must_change_pin: false }).eq('id', profile.id);
  if (profileError) fail('PIN changed, but setup could not finish. Sign in with your new PIN and try again.');

  // Refresh this phone's session with the new PIN so the person stays signed in.
  await supabase.auth.signInWithPassword({ email: staffEmail(profile.staff_id), password: pin });
  redirect('/?msg=pin');
}
