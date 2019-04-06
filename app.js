$(() => {

  // let video = document.getElementById('video');
  // if (video.canPlayType('video/mp4').replace('no', '').length > 0) {
  //   video.src = 'https://res.cloudinary.com/nuxuicourt/video/upload/v1552043413/mdma_nzfo4e.mp4';
  // }
  // video.style.display = 'block';

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

  $('#email').on('input', () =>{
    $("#email").removeClass('invalid');
  });

  $('.submit').click( e => {
    let email = $('#email').val();
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    let url = "https://nacho-api.herokuapp.com/api/mdma/subscribe?email=" + email;
    if ( email.length && regex.test(email) ) {
      clean();
      $.get(url, (data, status) => {
        if (data.status == 200) {
          localStorage.setItem('subscribed', data.id);
          $('.subscribe-form').hide();
          $('#subscribe').append(`
            <div class="success flash">
              <img src="logo/success.svg" alt="success" />
              <span style="text-align: center;">Futurism and Techno Music Live.<br>It's all about that.<br>Let's enjoy it.</span>
            </div>
          `);
          setTimeout( () => {
            clean();
            $('.subscribe-form').show();
            hide();
          }, 3500);
        } else {
          clean();
          $('#subscribe').append(`
            <span class="flash" style="padding-top: 25px; text-align: center;">We are already connected. See you in the future.</span>
          `);
        }
      });
    } else {
      clean();
      $('#email').addClass('invalid');
      $('#subscribe').append(`
        <span class="empty flash" style="padding-top: 25px; text-align: center;">We need a valid email to subscribe you.</span>
      `);
    }
  });

  function clean() {
    $('#email').removeClass('invalid');
    $('.flash').remove();
  }

  function toggle() {
    $('.subscribe').toggle();
  }

  function hide() {
     clean();
    $('.subscribe').hide();
  }

  function show() {
    $('.subscribe').show();
  }


});
