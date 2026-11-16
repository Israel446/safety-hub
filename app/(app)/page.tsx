import { requireProfile } from '@/lib/auth';
import { signOut } from '@/app/login/actions';
export default async function HomePage() {
  const { profile } = await requireProfile();
  return <><h1>Signed in as {profile.full_name}</h1><form action={signOut}><button>Sign out</button></form></>;
}
