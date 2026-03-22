importScripts("/assets/scramjet/scramjet.sync.js");

const scramjet = new ScramjetServiceWorker();

self.addEventListener("fetch", (event) => {
  if (scramjet.route(event)) {
    event.respondWith(scramjet.fetch(event));
  }
});
