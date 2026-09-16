
/*global u22ServiceWorker,__u22$config*/
/*
 
 * However, if a user changes the location of u22.bundle.js/u22.config.js or sw.js is not relative to them, they will need to modify this script locally.
 */
importScripts('u22.bundle.js');
importScripts('u22.config.js');
importScripts(__u22$config.sw || 'u22.sw.js');

const u22 = new u22ServiceWorker();

async function handleRequest(event) {
    try {
        if (u22.route(event)) {
            return await u22.fetch(event);
        }

        return await fetch(event.request);
    } catch (error) {
        console.error('Service worker request failed:', error);
        return new Response('Unable to fetch the requested resource.', {
            status: 502,
            statusText: 'Bad Gateway',
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        });
    }
}

self.addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event));
});
