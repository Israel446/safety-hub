import { requireProfile } from '@/lib/auth';
import { signOut } from '@/app/login/actions';
import InstallApp from '@/components/install-app';
import HubScripts from './hub-scripts';
import '@/app/hub.css';
export default async function HomePage() {
  const { profile } = await requireProfile();
  return <>
    <div className="wrap">
      <div className="hub-account"><span>{profile.full_name}</span><a href="/pin">Change PIN</a>{profile.role === 'admin' && <a href="/admin">Admin</a>}<form action={signOut}><button>Sign out</button></form></div>
      <InstallApp />
      <header className="top">
        <div className="mark"><b>5%</b>Five Percent</div>
        <nav className="tabs" aria-label="Sections"><div className="in"><span className="tab-highlight" aria-hidden="true" /><a href="#today" data-tab="today">Calendar</a><a href="#path" data-tab="path">Learn</a><a href="#team" data-tab="team">Team</a><a href="#me" data-tab="me">Me</a></div></nav>
        <div className="sync" id="sync">Progress saved on this device</div>
      </header>
      <main id="view" data-user-id={profile.id} />
    </div><HubScripts />
  </>;
}
