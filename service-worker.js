let name = 'mdma';
let files = ['/index.html', '/styles.css', 'logo/256.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(name).then( cache => {
      return cache.addAll(files);
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then( keyList => {
      return Promise.all( keyList.map( key => {
        if (key !== name) {
          return caches.delete(key);
        }
      }));
    })
  );
  return;
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then( response => {
      return response || fetch(e.request);
    })
  );
});