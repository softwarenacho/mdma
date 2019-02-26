$("#bio-toggle").click( () => {
  $('#bio-modal').animate({
    height: "toggle",
    opacity: "toggle"
  });
});

(() => {
  'use strict';

  let app = {
    modal: document.getElementById('bio-toggle')
  };

  let offline = {
    email: 'sanabria@futuregamemusic.com',
    bio: `
      MentalDanceMusicAlgorithm is an alter ego which takes form representing itself in a live act of techno music.\n
      It arises after eight years of sound experimentation, consuming electronic music every day.\n
      Developing hypnotic and enveloping sessions as dj, looking for the way and filtering the steps to follow as a music producer.\n
      Throughout this time he was exploring to arrive at an adequate sound which faithfully represents what the music is for him and to where wants to guide people when he share music with them.\n
      With 8 years immersed in the music scene, 5 years of music production, after a year just creating sounds within the studio and going deeper into the handling of physical synthesizers that will lead to a more complete project and a more concrete idea, born MentalDanceMusicAlgorithm.\n
      A live act manipulating synthesizers creating a techno sound with which it seeks to achieve a self-exploration through the physical and mental dance thus achieving a hypnotic and unique process.`
  }

  app.offline = localStorage.offline;
  if (app.offline) {
    app.offline = JSON.parse(app.offline);
  } else {
    app.offline = offline;
  }

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

