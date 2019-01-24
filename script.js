$("#bio-toggle").click(function() {
  // $('#bio-modal').fadeToggle(250);
  $('#bio-modal').animate({
    height: "toggle",
    opacity: "toggle"
  });
});
