$(".submit").on("click", function () {
  var name = $("#name").val();
  var email = $("#email").val();
  var subject = $("#subject").val();
  var message = $("#message").val();

  if (!name == "" && !email == "" && !subject == "" && !message == "") {
    if (isEmail(email)) {
      $.ajax({
        type: "post",
        url: "../contactform.php",
        data: {
          name: name,
          email: email,
          subject: subject,
          message: message,
        },
        success: function (response) {
          if (response === "1") {
            $(".submit").notify("Successful", {
              position: "bottom center",
              className: "success",
            });
          }
        },
      });
    } else {
      $(".submit").notify("Please enter a valid email address!", {
        position: "bottom center",
        className: "error",
      });
    }
  } else {
    $(".submit").notify("Please fill in the form!", {
      position: "bottom center",
      className: "error",
    });
  }
});

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
