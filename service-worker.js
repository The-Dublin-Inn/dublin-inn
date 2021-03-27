const cacheName = 'cache-v1';
const resources = [
    '/',
    'index.html',
    'menu.html',
    'src/css/style.css',
    'src/css/menu.css',
    'assets/images/logo-black.png',
    'assets/images/dublin-inn-logo.webp',
    'assets/images/burger-showcase.webp',
    'assets/images/meat1.webp',
    'assets/images/leprechaun-phone-box.webp',
    'assets/images/meat2.webp',
    'assets/images/poster.webp',
    'assets/images/beer.webp'
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheName)
            .then((cache) => {
                return cache.addAll(resources);
            })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

// only dev - new version of app is registered ↓
//self.caches.delete("cache-v1");
caches.delete('cache-v1');