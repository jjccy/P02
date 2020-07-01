
var appear = false;

$(document).ready(function() {
  changeNav();

  $(".main-nav-left").css({
    'visibility' : 'hidden'
  });

  $(".main-nav-item").css({
    'opacity' : '0'
  });

  $(".mobile-backup-nav").css({
    'position' : 'fixed'
  });

  $(".mobile-backup-nav").css({
    'top' : '-28em'
  });


  $("#call-left").click(function(event) {
    event.preventDefault();
    appear = true;
    changeNav();

    return false;
  });

  $("#close-left").click(function(event) {
    event.preventDefault();
    appear = false;
    changeNav();

    return false;
  });

});

// $(window).scroll(function() {
//   var height = $(window).scrollTop();
//   var shade = 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)'
//
//   if (height > 100) {
//     $('.main-nav-top').css({
//       'background' : shade
//     });
//   } else {
//     $('.main-nav-top').css({
//       'background' : "none"
//     });
//   }
//
// });

function changeNav() {
  $(".main-nav-left, .main-nav-item").css({
    'visibility' : 'visible'
  });
  $(".main-nav-item").css({
    'opacity' : '1'
  });

  if (appear) {
    if(!$('.main-nav-top').hasClass('scroll-up'))
    {
      $('.main-nav-top').addClass('scroll-up');
    }
    if($('.main-nav-left').hasClass('disappear'))
    {
      $('.main-nav-left').removeClass('disappear');
    }
  }
  else {
    if($('.main-nav-top').hasClass('scroll-up'))
    {
      $('.main-nav-top').removeClass('scroll-up');
    }
    if(!$('.main-nav-left').hasClass('disappear'))
    {
      $('.main-nav-left').addClass('disappear');
    }
  }
};
