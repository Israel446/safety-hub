import type { Metadata, Viewport } from 'next';
import './globals.css';
import ServiceWorker from '@/components/service-worker';
export const metadata: Metadata = { title: 'Five Percent Safety Hub', description: 'Daily learning for safety professionals at a Ghanaian surface mine.',
  manifest: '/manifest.webmanifest',
  icons: { icon: [{ url: '/icons/icon.svg', type: 'image/svg+xml' }, { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' }], apple: '/icons/apple-touch-icon.png' },
  appleWebApp: { capable: true, title: '5% Hub', statusBarStyle: 'default' } };
export const viewport: Viewport = {
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#f6f4ef' }, { media: '(prefers-color-scheme: dark)', color: '#111315' }],
  viewportFit: 'cover', width: 'device-width', initialScale: 1,
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,400..700;1,8..60,400&display=swap" rel="stylesheet" /></head><body>{children}<ServiceWorker /></body></html>;
}
