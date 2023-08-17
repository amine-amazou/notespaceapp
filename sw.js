const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/static/css/main.chunk.css',
  '/static/js/main.chunk.js',
  '/favicon.ico',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});