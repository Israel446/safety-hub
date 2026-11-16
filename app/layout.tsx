import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Five Percent Safety Hub', description: 'Daily learning for safety professionals at a Ghanaian surface mine.' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
