importScripts("/assets/scramjet/scramjet.bundle.js");
importScripts("/assets/scramjet/scramjet.all.js");

const scramjet = new ScramjetServiceWorker();

self.addEventListener("fetch", (event) => {
  if (scramjet.route(event)) {
    event.respondWith(scramjet.fetch(event));
  }
});
