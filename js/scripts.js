$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $('.output').empty();
    //Assign input 1 to variable
    var countToInput = parseFloat($("#count-to").val());

    //Assign input 2 to variable

    var countByInput = parseFloat($("#count-by").val());



//Business Logic
    if (isNaN(countToInput)) {
      $("#error-1").text("Please enter a number.");
      $("#hidden-label-1").show();
    } else if (countToInput <= 0) {
      $("#error-1").text("Please enter a positive number.");
      $("#hidden-label-1").show();
    } else if (countToInput < countByInput) {
      $("#error-1").text("This number should be bigger than your other number, idiot.");
      $("#hidden-label-1").show();
    } else {
      $("#hidden-label-1").hide();
    };

    if (isNaN(countByInput)) {
      $("#error-2").text("Please enter a number.");
      $("#hidden-label-2").show();
    } else if (countByInput <= 0) {
      $("#error-2").text("Please enter a positive number.");
      $("#hidden-label-2").show();
    } else {
      $("#hidden-label-1").hide();
    };



    for (var index = countByInput; index <= countToInput; index += countByInput) {
      $(".output").append("<li>" + index + "</li>")
    }

  });
  });
// });
