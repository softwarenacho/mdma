(() => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then( () => {
      console.log('sw ok');
    });
  }
});

$("#bio-toggle").click( () => {
  $('#bio-modal').animate({
    height: "toggle",
    opacity: "toggle"
  });
});
