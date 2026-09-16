
importScripts('uv.bundle.js');
importScripts('uv.config.js');
importScripts(__u22$config.sw || 'uv.sw.js');

const u2 = new u2ServiceWorker();

async function handleRequest(event) {
    if (u2.route(event)) {
        return await u2.fetch(event);
    }
    
    return await fetch(event.request)
}

self.addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event));
});
