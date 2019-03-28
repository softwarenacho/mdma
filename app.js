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
    hide();
  });

  $('.subscribe-btn').click( () => {
    toggle();
  });

  $('.info').click( e => {
    if ( !($(e.target).hasClass('subscribe-btn')) ) {
      hide();
    }
  });

  $('.content').click( e => {
    if ( !($(e.target).hasClass('subscribe-btn')) ) {
      hide();
    }
  });

  if (!localStorage.getItem('subscribed')) {
    show();
  }

  $('.header').click( e => {
    if ( !($(e.target).hasClass('subscribe-btn')) ) {
      hide();
    }
  });

  $('.submit').click( e => {
    let email = $('.email').val();
    let url = "https://nacho-api.herokuapp.com/api/mdma/subscribe?email=" + email;
    $.get(url, (data, status) => {
      if (data.status == 200) {
        localStorage.setItem('subscribed', data.id);
        $('#subscribe').html(`
          <div class="success">
            <img src="logo/success.svg" alt="success" />
            <span>You are now connected with us.</span>
          </div>
        `);
        setTimeout( () => {
          hide()
        }, 2500);
      } else {
        $('#subscribe').append(`
          <span style="padding-top: 25px; text-align: center;">We are already connected. See you in the future.</span>
        `);
      }
    });
  });

  function toggle() {
    $('.subscribe').toggle();
  }

  function hide() {
    $('.subscribe').hide();
  }

  function show() {
    $('.subscribe').show();
  }


});
