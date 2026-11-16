import Link from 'next/link';
import { requireProfile } from '@/lib/auth';
import { signOut } from '@/app/login/actions';
import { changePin } from './actions';
export const dynamic = 'force-dynamic';
export default async function PinPage({ searchParams }: { searchParams: { err?: string } }) {
  const { profile } = await requireProfile({ allowPinChange: true });
  return <main className="auth"><h1>{profile.must_change_pin ? 'Choose your own PIN' : 'Change my PIN'}</h1>
    <p>{profile.must_change_pin ? 'Your administrator set your PIN. Choose your own before continuing.' : 'Keep your PIN private.'}</p>
    <form action={changePin}><input type="hidden" name="first" value={profile.must_change_pin ? '1' : ''} />
      <label htmlFor="current">Current PIN</label><input id="current" name="current" type="password" inputMode="numeric" autoComplete="current-password" required />
      <label htmlFor="pin">New PIN</label><input id="pin" name="pin" type="password" inputMode="numeric" pattern="[0-9]{6,12}" autoComplete="new-password" required />
      <label htmlFor="pin2">New PIN again</label><input id="pin2" name="pin2" type="password" inputMode="numeric" pattern="[0-9]{6,12}" autoComplete="new-password" required />
      <p>6 to 12 digits. Avoid repeated digits and runs like 123456.</p>
      {searchParams.err && <p role="alert">{searchParams.err}</p>}<button>Save new PIN</button>
    </form>{!profile.must_change_pin && <Link href="/">Cancel</Link>}<form action={signOut}><button>Sign out</button></form></main>;
}
