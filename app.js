$(() => {

  let video = document.getElementById('video');
  if (video.canPlayType('video/mp4').replace('no', '').length > 0) {
    video.src = 'https://res.cloudinary.com/nuxuicourt/video/upload/v1552043413/mdma_nzfo4e.mp4';
  }
  video.style.display = 'block';

  $('#bio-toggle').click( () => {
    $('#bio-modal').toggle();
  });

  $('.close').click( () => {
    toggle()
  });

  $('.suscribe-btn').click( () => {
    toggle()
  });

  $('.info').click( e => {
    if ( !($(e.target).hasClass('suscribe-btn')) ) {
      hide();
    }
  });

  $('.content').click( e => {
    if ( !($(e.target).hasClass('suscribe-btn')) ) {
      hide();
    }
  });

  $('.header').click( e => {
    if ( !($(e.target).hasClass('suscribe-btn')) ) {
      hide();
    }
  });

  $('#suscribe').submit( e => {
    e.preventDefault();
  });

  function toggle() {
    $('.suscribe').toggle();
  }

  function hide() {
    $('.suscribe').hide();
  }


});
