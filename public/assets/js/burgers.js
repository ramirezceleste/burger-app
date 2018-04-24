$(function () {

  $("#create").on("submit", function (event) {
      event.preventDefault();
      var newBurger = {
          name: $("#create-burger").val().trim(),
      };
      console.log(newBurger);
      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      }).then(
          function (data) {
              location.reload();
          }
      );
  });

  $(".btn-devour").on("click", function(event) {
      var id = $(this).data("id");
      $.ajax("/api/burgers/" + id, {
        type: "PUT"       
      }).then(
        function() {
          location.reload();
        }
      );
    });
});