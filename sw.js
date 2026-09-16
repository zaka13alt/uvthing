
/*global u22ServiceWorker,__u22$config*/
/*
 
 * However, if a user changes the location of u22.bundle.js/u22.config.js or sw.js is not relative to them, they will need to modify this script locally.
 */
importScripts('uv.bundle.js');
importScripts('uv.config.js');
importScripts(__u22$config.sw || 'uv.sw.js');

const u22 = new u22ServiceWorker();

async function handleRequest(event) {
    if (u22.route(event)) {
        return await u22.fetch(event);
    }
    
    return await fetch(event.request)
}

self.addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event));
});
