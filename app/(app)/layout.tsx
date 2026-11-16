import Link from 'next/link';
import { requireProfile } from '@/lib/auth';
export const dynamic = 'force-dynamic';
export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const { profile } = await requireProfile();
  return <><header><Link href="/">Five Percent Safety Hub</Link><nav><Link href="/pin">Change my PIN</Link>{profile.role === 'admin' && <Link href="/admin">Admin</Link>}</nav></header><main>{children}</main></>;
}
