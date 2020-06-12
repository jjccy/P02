
var appear = false;

$(document).ready(function() {
  changeNav();

  $(".main-nav-left").css({
    'visibility' : 'hidden'
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

function changeNav() {
  $(".main-nav-left").css({
    'visibility' : 'visible'
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
