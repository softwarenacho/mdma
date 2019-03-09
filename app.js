$(() => {
  let video = document.getElementById('video');
  if (video.canPlayType('video/mp4').replace('no', '').length > 0) {
    video.src = 'https://res.cloudinary.com/nuxuicourt/video/upload/v1552043413/mdma_nzfo4e.mp4';
  }
  video.style.display = 'block';
  let clickHandler = ('ontouchstart' in document.documentElement ? 'touchstart' : 'click');
  $('#bio-toggle').bind(clickHandler, function() {
    $('#bio-modal').animate({
      height: "toggle",
      opacity: "toggle"
    });
  });
});
