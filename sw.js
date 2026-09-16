importScripts('uv.bundle.js');
importScripts('uv.config.js');
importScripts(__u22$config.sw || 'uv.sw.js');

// 
const u22 = new u2ServiceWorker();

async function handleRequest(event) {
    // 
    if (u22.route(event)) {
        return await u22.fetch(event);
    }
    
    return await fetch(event.request);
}

self.addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event));
});
