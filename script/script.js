$(document).ready(() => {
  $("#bigMap").show();
  $("#mobileNav").hide();
});

$("#mobileNavOpen").click(function() {
  $("#bigMap").hide(400, "swing");
  $("#mobileNav").show(400, "swing");
});

$("#mobileNavClose").click(function() {
  $("#bigMap").show(400, "swing");
  $("#mobileNav").hide(400, "swing");
});