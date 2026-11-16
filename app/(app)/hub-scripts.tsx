'use client';
import Script from 'next/script';
import { useEffect, useState } from 'react';
const sources = ['lessons.js', 'lessons-b.js', 'lessons-c.js', 'lessons-d.js', 'topics.js', 'curriculum.js'].map(name => `/data/${name}`).concat(['/hub/claude-shim.js', '/hub/hub.js']);
export default function HubScripts() {
  const [loaded, setLoaded] = useState(0);
  // hub.js runs once per page load; if we arrive here by client-side navigation after it already ran, reload so it starts fresh.
  useEffect(() => { if ((window as unknown as { __hubBooted?: boolean }).__hubBooted) window.location.reload(); }, []);
  return <>{sources.slice(0, loaded + 1).map((src, index) => <Script key={src} src={src} strategy="afterInteractive" onReady={() => setLoaded(n => Math.max(n, index + 1))} />)}</>;
}
