import { requireAdmin } from '@/lib/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { addUser, bulkAdd, updateUser } from './actions';
const Roles = ({ value = 'member' }: { value?: string }) => <select name="role" defaultValue={value}><option value="member">Member</option><option value="owner">Owner</option><option value="admin">Admin</option></select>;
export default async function AdminPage({ searchParams }: { searchParams: { msg?: string; err?: string } }) {
  await requireAdmin();
  const { data: people, error } = await createAdminClient().from('profiles').select('id,staff_id,full_name,role,active').order('full_name');
  return <><h1>People</h1>{searchParams.msg && <p role="status">{searchParams.msg}</p>}{(searchParams.err || error) && <p role="alert">{searchParams.err || 'Could not load people.'}</p>}
    <h2>Add one person</h2><form action={addUser}>
      <label>Staff ID<input name="staff_id" required /></label><label>Full name<input name="full_name" required /></label>
      <label>Role<Roles /></label><label>Initial PIN<input name="pin" type="password" inputMode="numeric" pattern="[0-9]{6,12}" autoComplete="new-password" required /></label><button>Add person</button>
    </form><h2>Paste many people</h2><form action={bulkAdd}><label>STAFFID, Full Name, PIN — one person per line (up to 200)<textarea name="rows" rows={6} required /></label><p>Each person is added as a member. PINs must be 6–12 digits with no all-identical digits or straight runs.</p><button>Add people</button></form>
    <h2>Manage people</h2>{people?.map(person => <form key={person.id} action={updateUser}>
      <h3>{person.full_name} · {person.staff_id}</h3><input type="hidden" name="id" value={person.id} />
      <label>Role<Roles value={person.role} /></label><label><input type="checkbox" name="active" defaultChecked={person.active} /> Active</label>
      <label>Reset PIN (leave blank to keep current PIN)<input name="pin" type="password" inputMode="numeric" autoComplete="new-password" pattern="[0-9]{6,12}" /></label><button>Save person</button>
    </form>)}</>;
}
