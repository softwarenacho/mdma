$(() => {

  let video = document.getElementById('video');
  if (video.canPlayType('video/mp4').replace('no', '').length > 0) {
    video.src = 'https://res.cloudinary.com/nuxuicourt/video/upload/v1552043413/mdma_nzfo4e.mp4';
  }
  video.style.display = 'block';

  $('#bio-toggle').click( () => {
    $('#bio-modal').toggle();
  });

  $( "#suscribe" ).submit( e => {
    alert( "Handler for .submit() called." );
    e.preventDefault();
  });


});
