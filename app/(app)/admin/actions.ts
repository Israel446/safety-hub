'use server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { requireAdmin } from '@/lib/auth';
import { createAdminClient, staffEmail } from '@/lib/supabase/server';
import { pinProblem } from '@/lib/pin-rules';
import type { Role } from '@/lib/types';
const roles = ['member', 'owner', 'admin'];
const back = (message: string, error = false): never => redirect(`/admin?${error ? 'err' : 'msg'}=${encodeURIComponent(message)}`);
function validate(staff: string, name: string, pin: string) {
  if (!/^[a-zA-Z0-9._-]+$/.test(staff)) return 'Staff ID may contain only letters, numbers, dots, underscores and hyphens (spaces are ignored).';
  if (!name) return 'Full name is required.';
  return pinProblem(pin);
}
async function createOne(staff: string, name: string, pin: string, role: Role) {
  const admin = createAdminClient();
  const { data, error } = await admin.auth.admin.createUser({ email: staffEmail(staff), password: pin, email_confirm: true });
  if (error || !data.user) return error?.message ?? 'Could not create login.';
  const { error: profileError } = await admin.from('profiles').insert({ id: data.user.id, staff_id: staff.toUpperCase(), full_name: name, role, must_change_pin: true });
  if (profileError) { const { error: cleanup } = await admin.auth.admin.deleteUser(data.user.id); return profileError.message + (cleanup ? ' Login cleanup failed; contact the operator.' : ''); }
  return null;
}
export async function addUser(form: FormData) {
  await requireAdmin();
  const staff = String(form.get('staff_id') ?? '').replace(/\s+/g, ''), name = String(form.get('full_name') ?? '').trim(), pin = String(form.get('pin') ?? '');
  const role = String(form.get('role')) as Role;
  if (!roles.includes(role)) back('Choose a valid role.', true);
  const problem = validate(staff, name, pin); if (problem) back(problem, true);
  const error = await createOne(staff, name, pin, role); if (error) back(error, true);
  revalidatePath('/admin'); back(`Added ${name}. They must choose their own PIN at first sign-in.`);
}
export async function bulkAdd(form: FormData) {
  await requireAdmin();
  const lines = String(form.get('rows') ?? '').split('\n').map(x => x.trim()).filter(Boolean);
  if (!lines.length || lines.length > 200) back('Paste 1 to 200 people at a time.', true);
  let added = 0; const errors: string[] = [];
  for (const [i, line] of lines.entries()) {
    const cells = line.split(',').map(x => x.trim());
    const [rawStaff = '', name = '', pin = ''] = cells; const staff = rawStaff.replace(/\s+/g, '');
    const problem = cells.length !== 3 ? 'Expected STAFFID, Full Name, PIN.' : validate(staff, name, pin);
    if (problem) { errors.push(`Line ${i+1}: ${problem}`); continue; }
    const error = await createOne(staff, name, pin, 'member');
    if (error) errors.push(`Line ${i+1}: ${error}`); else added++;
  }
  revalidatePath('/admin'); back(`Added ${added} of ${lines.length}. ${errors.slice(0,15).join('; ')}`, errors.length > 0);
}
export async function updateUser(form: FormData) {
  const { profile } = await requireAdmin();
  const id = String(form.get('id') ?? ''), role = String(form.get('role')) as Role, active = form.get('active') === 'on';
  const pin = String(form.get('pin') ?? '');
  if (!roles.includes(role)) back('Choose a valid role.', true);
  if (id === profile.id && (!active || role !== 'admin')) back('You cannot deactivate yourself or change your own role.', true);
  if (pin) { const problem = pinProblem(pin); if (problem) back(problem, true); }
  const admin = createAdminClient();
  const { data: target, error: lookupError } = await admin.from('profiles').select('id').eq('id', id).single();
  if (lookupError || !target) back('Person not found.', true);
  // Deactivation is effective through RLS immediately, including existing sessions.
  const { error } = await admin.from('profiles').update({ role, active, ...(pin ? { must_change_pin: true } : {}) }).eq('id', id);
  if (error) back(error.message, true);
  const { error: authError } = await admin.auth.admin.updateUserById(id, { ban_duration: active ? 'none' : '876000h', ...(pin ? { password: pin } : {}) });
  revalidatePath('/admin');
  if (authError) back(`Profile saved, but login update failed: ${authError.message}. Retry this change.`, true);
  back(pin ? 'Saved and PIN reset.' : 'Saved.');
}
