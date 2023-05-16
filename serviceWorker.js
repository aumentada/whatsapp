/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
const whatsappea= 'whatsappea';
const assets = [
  './',
  './index.html',
  './img/favicon.ico',
  './img/logo.png'
]

// eslint-disable-next-line arrow-parens
self.addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(whatsappea).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    }),
  );
});
