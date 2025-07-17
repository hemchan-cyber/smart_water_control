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

self.addEventListener("install", function (event) {
  console.log("Service Worker installing.");
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  console.log("Service Worker activating.");
});

self.addEventListener("fetch", function (event) {
  event.respondWith(fetch(event.request));
});

