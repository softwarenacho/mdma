// const name = 'mdma';
// const files = ['/index.html', '/styles.css', 'logo/512.png', '/mdma.mp4', '/mdma.gif'];

// self.addEventListener('install', e => {
//   e.waitUntil(
//     caches.open(name).then( cache => {
//       return cache.addAll(files);
//     })
//   );
// });

// self.addEventListener('activate', e => {
//   e.waitUntil(
//     caches.keys().then( keyList => {
//       return Promise.all( keyList.map( key => {
//         if (key !== name) {
//           return caches.delete(key);
//         }
//       }));
//     })
//   );
//   return;
// });

// self.addEventListener('fetch', e => {
//   e.respondWith(
//     caches.match(e.request).then( response => {
//       return response || fetch(e.request);
//     })
//   );
// });
