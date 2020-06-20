$(document).ready(function () {
  $("#float-menu-men").hover(
    function () {
      $(".float-menu-men").css("display", "grid");
    },
    function () {
      $(".float-menu-men").css("display", "none");
    }
  );
});
