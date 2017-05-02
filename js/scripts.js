//Business Logic

// Create a variable that's a function that accepts our inputs as parameters/argument and creates a new variable that's an array
var counter = function(countBy, countTo){
  var someArr = [];

//for loop with initialization parameter, conditional parameter, and final expression parameter
  for (var index = countBy; index <= countTo; index += countBy) {
    someArr.push(index);
  }
  return someArr;
}

//Front-End Logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $('.output').empty();
    //Assign input 1 to variable
    var countToInput = parseFloat($("#count-to").val());

    //Assign input 2 to variable
    var countByInput = parseFloat($("#count-by").val());

    //if else statements to evaluate input and give error messages
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
      var results = counter(countByInput, countToInput);

      //
      results.forEach(function(num){
        $(".output").append("<li>" + num + "</li>")
      });
    };




//Business Logic






  });
  });
// });
