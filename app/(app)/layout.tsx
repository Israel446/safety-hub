import { requireProfile } from '@/lib/auth';
export const dynamic = 'force-dynamic';
export default async function AppLayout({ children }: { children: React.ReactNode }) {
  await requireProfile();
  return <>{children}</>;
}
