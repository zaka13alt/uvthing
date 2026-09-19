
/*global u22ServiceWorker,__u22$config*/
/*
 
 * hi
 */
importScripts('u22.bundle.js');
importScripts('conf.js');
importScripts(__u22$config.sw || 'u22.sw.js');

const u22 = new u22ServiceWorker();

async function handleRequest(event) {
    try {
        if (u22.route(event)) {
            return await u22.fetch(event);
        }

        return await fetch(event.request);
    } catch (error) {
        console.error('caching error', error);
        return new Response('cache error', {
            status: 502,
            statusText: 'Bad Gateway',
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        });
    }
}

self.addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event));
});
