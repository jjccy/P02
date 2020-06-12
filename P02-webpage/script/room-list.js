$(document).ready(function() {

  $("#room1 .room-button").click(function(event) {
    event.preventDefault();
    addText('#room1');
    return false;
  });

  $("#room2 .room-button").click(function(event) {
    event.preventDefault();
    addText('#room2');
    return false;
  });

  $("#room3 .room-button").click(function(event) {
    event.preventDefault();
    addText('#room3');
    return false;
  });

  $("#room4 .room-button").click(function(event) {
    event.preventDefault();
    addText('#room4');
    return false;
  });

  $("#room5 .room-button").click(function(event) {
    event.preventDefault();
    addText('#room5');
    return false;
  });

  $("#room6 .room-button").click(function(event) {
    event.preventDefault();
    addText('#room6');
    return false;
  });

  $("#room7 .room-button").click(function(event) {
    event.preventDefault();
    addText('#room7');
    return false;
  });

  $("#room8 .room-button").click(function(event) {
    event.preventDefault();
    addText('#room8');
    return false;
  });

  $("#room9 .room-button").click(function(event) {
    event.preventDefault();
    addText('#room9');
    return false;
  });

  $("#room10 .room-button").click(function(event) {
    event.preventDefault();
    addText('#room10');
    return false;
  });


});

function addText(id) {
  var target = id + ' > .room-text-holder'

  if(!$(target).hasClass('shown'))
  {
    $(target).addClass('shown');
  }
  else {
    $(target).removeClass('shown');
  }
}
