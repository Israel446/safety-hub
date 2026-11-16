'use client';
import { useEffect, useState } from 'react';

type PromptEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };
const dismissalKey = 'safety-hub-install-dismissed';

export default function InstallApp() {
  const [prompt, setPrompt] = useState<PromptEvent | null>(null);
  const [ios, setIos] = useState(false);
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    const standalone = window.matchMedia('(display-mode: standalone)').matches || (navigator as Navigator & { standalone?: boolean }).standalone === true;
    let dismissed = false;
    try { dismissed = localStorage.getItem(dismissalKey) === '1'; } catch {}
    setHidden(standalone || dismissed);
    setIos(/iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
    const onPrompt = (event: Event) => { event.preventDefault(); setPrompt(event as PromptEvent); };
    const onInstalled = () => { setHidden(true); setPrompt(null); };
    window.addEventListener('beforeinstallprompt', onPrompt);
    window.addEventListener('appinstalled', onInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);
  if (hidden || (!prompt && !ios)) return null;
  return <div className="hub-install" role="region" aria-label="Install Safety Hub">
    {prompt ? <button type="button" onClick={async () => {
      try {
        await prompt.prompt();
        const choice = await prompt.userChoice;
        if (choice.outcome === 'accepted') setHidden(true);
      } catch {} finally { setPrompt(null); }
    }}>Install 5% Hub</button> : <span>In Safari, tap <b>Share → Add to Home Screen</b> to install 5% Hub.</span>}
    <button type="button" className="hub-install-dismiss" aria-label="Dismiss install suggestion" onClick={() => {
      setHidden(true);
      try { localStorage.setItem(dismissalKey, '1'); } catch {}
    }}>Dismiss</button>
  </div>;
}
