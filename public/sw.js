// Cache only public, same-origin shell files. Never persist authenticated pages or APIs.
const CACHE_PREFIX = 'safety-hub-shell-';
const CACHE_NAME = `${CACHE_PREFIX}v1`;
const ASSETS = [
  '/offline.html', '/manifest.webmanifest',
  '/icons/icon.svg', '/icons/icon-192.png', '/icons/icon-512.png',
  '/icons/icon-512-maskable.png', '/icons/apple-touch-icon.png',
  '/hub/claude-shim.js', '/hub/hub.js',
  '/data/lessons.js', '/data/lessons-b.js', '/data/lessons-c.js',
  '/data/lessons-d.js', '/data/topics.js', '/data/curriculum.js',
];
const isPublicAsset = (url) => ASSETS.includes(url.pathname) || /^\/(hub|data)\/[^/]+\.js$/.test(url.pathname);
const canCache = (response) => response.ok && response.type === 'basic' && !response.redirected && !/no-store|private/i.test(response.headers.get('Cache-Control') || '');

async function refreshAsset(url) {
  // Omit cookies and bypass the HTTP cache so monthly data updates immediately online.
  const response = await fetch(url, { credentials: 'omit', cache: 'no-store', redirect: 'error' });
  if (canCache(response)) {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(url, response.clone());
  }
  return response;
}
self.addEventListener('install', (event) => {
  event.waitUntil(Promise.all(ASSETS.map(refreshAsset)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || url.pathname === '/api' || url.pathname.startsWith('/api/')) return;
  if (request.mode === 'navigate') {
    // Use the real request for authentication, but never write its response to Cache Storage.
    event.respondWith(fetch(request).catch(async () => {
      const cache = await caches.open(CACHE_NAME);
      return (await cache.match('/offline.html')) || Response.error();
    }));
    return;
  }
  if (url.search || !isPublicAsset(url) || request.headers.has('Authorization')) return;
  event.respondWith((async () => {
    try {
      const response = await refreshAsset(url.pathname);
      if (response.ok) return response;
      const cache = await caches.open(CACHE_NAME);
      return (await cache.match(url.pathname)) || response;
    } catch {
      const cache = await caches.open(CACHE_NAME);
      return (await cache.match(url.pathname)) || Response.error();
    }
  })());
});
