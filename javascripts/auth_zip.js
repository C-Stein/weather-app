define(function(require) {
  var $ = require("jquery");

  // Gets user input to authenticate if it's a 5 digit number
  $("#search").click(function(e) {
    var userInput = $("#searchText").val();
     e.preventDefault();

    if(userInput.length === 5) {
     console.log("userInput", userInput);
    }
    else {
     alert("Please enter a 5 digit zip-code");
    }

  });
});