$(() => {
  let video = document.getElementById('video');
  if (video.canPlayType('video/mp4').replace('no', '').length > 0) {
    video.src = 'mdma.mp4';
  } else {
    video.poster = 'mdma.gif';
  }
  video.style.display = 'block';
  $("#bio-toggle").click( () => {
    $('#bio-modal').animate({
      height: "toggle",
      opacity: "toggle"
    });
  });
});
