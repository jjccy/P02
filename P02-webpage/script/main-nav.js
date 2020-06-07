


$(document).ready(function() {
  $("#call-left").click(function(event) {
    event.preventDefault();

    if(!$('.main-nav-top').hasClass('scroll-up'))
    {
      $('.main-nav-top').addClass('scroll-up');
    }
    if(!$('.main-nav-left').hasClass('appear'))
    {
      $('.main-nav-left').addClass('appear');
    }
    return false;
  });

  $("#close-left").click(function(event) {
    event.preventDefault();

    if($('.main-nav-top').hasClass('scroll-up'))
    {
      $('.main-nav-top').removeClass('scroll-up');
    }
    if($('.main-nav-left').hasClass('appear'))
    {
      $('.main-nav-left').removeClass('appear');
    }
    return false;
  });

});
