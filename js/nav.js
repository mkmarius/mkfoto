$(document).on("click", ".image-nav li", function () {
  $(this).addClass("active").siblings().removeClass("active");
});
