import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Five Percent Safety Hub', description: 'Daily learning for safety professionals at a Ghanaian surface mine.' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,400..700;1,8..60,400&display=swap" rel="stylesheet" /></head><body>{children}</body></html>;
}
