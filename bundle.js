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

function showButton(from) {
  if (from == "bar") {
    $("#barsIcon").css("display", "none");
    $("#closeIcon").css("display", "block");
    $(".content-all").css("display", "none");
    $(".menubar-mobile").css("display", "flex");
  } else {
    $("#barsIcon").css("display", "block");
    $("#closeIcon").css("display", "none");
    $(".content-all").css("display", "block");
    $(".menubar-mobile").css("display", "none");
  }
}
