importScripts("/assets/scramjet/scramjet.bundle.js");

const { ScramjetServiceWorker } = $scramjetLoadController();
const sw = new ScramjetServiceWorker();

self.addEventListener("fetch", (event) => {
  if (sw.route(event)) {
    event.respondWith(sw.fetch(event));
  }
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "skipWaiting") self.skipWaiting();
});
