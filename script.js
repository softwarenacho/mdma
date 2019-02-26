$("#bio-toggle").click( () => {
  $('#bio-modal').animate({
    height: "toggle",
    opacity: "toggle"
  });
});

(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then( () => {
    });
  }
});

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=400212347411734&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

