$(document).ready(function() {
  $("#form_one").submit(function(event) {
      var userInput = $("#user_name").val();

      $(".user-name").text(userInput);

      $("#message").show();

      event.preventDefault();
  });
});
