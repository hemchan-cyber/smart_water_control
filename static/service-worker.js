const cacheName = "smart-water-cache-v1";
const assets = [
  "/",
  "/login",
  "/loading",
  "/dashboard",
  "/static/logo.png",
  "/static/login.png",
  "/static/das.jpeg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
