
  console.log('script', navigator)

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then( () => {
      console.log('sw ok');
    });
  }
