const CACHE = 'graphase-v2';
const ASSETS = ['./', './index.html', './icon.svg', './manifest.webmanifest',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// El service worker solo gestiona los archivos propios de la app y el CDN de
// Chart.js. Todo lo demás —analítica, publicidad, cualquier host de terceros—
// pasa directo a la red: cachear gtm.js congelaría el contenedor de GTM en la
// versión que se descargó el día de la instalación.
const PRECACHED = new Set(ASSETS.map(a => new URL(a, self.registration.scope).href));
const isPropio = url => url.origin === self.location.origin || PRECACHED.has(url.href);

// Stale-while-revalidate: responde al instante desde caché y actualiza en segundo plano.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (!isPropio(new URL(e.request.url))) return;
  e.respondWith(
    caches.match(e.request).then(hit => {
      const net = fetch(e.request).then(res => {
        if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
