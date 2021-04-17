$(".filter").not(".nature").hide();
$(".nav-photo").click(function () {
  let name = $(this).attr("data-filter");
  $(".filter")
    .not("." + name)
    .hide("2000");
  $(".filter")
    .filter("." + name)
    .show("2000");
});
