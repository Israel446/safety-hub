import { signIn, signOut } from './actions';
export default function LoginPage({ searchParams }: { searchParams: { error?: string; next?: string } }) {
  return <main className="auth"><h1>Five Percent Safety Hub</h1><form action={signIn}>
    <input type="hidden" name="next" value={searchParams.next ?? '/'} />
    <label htmlFor="staff_id">Staff ID</label><input id="staff_id" name="staff_id" autoComplete="username" autoCapitalize="none" required />
    <label htmlFor="pin">PIN</label><input id="pin" name="pin" type="password" inputMode="numeric" autoComplete="current-password" minLength={6} maxLength={12} required />
    {searchParams.error && <p role="alert">{searchParams.error === 'inactive' ? 'Your account is not active. Ask the administrator.' : 'Staff ID or PIN is wrong. Try again, or ask the administrator to reset your PIN.'}</p>}
    <button>Sign in</button></form><p>Accounts are provided by your administrator. Forgot your PIN? Ask for a reset.</p>
    {searchParams.error === 'inactive' && <form action={signOut}><button>Sign out</button></form>}
  </main>;
}
