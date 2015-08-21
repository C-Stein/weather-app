define(function(require) {
  var $ = require("jquery");

  $("#subButton").click(function(e) {
    var userInput = $("#userInput").val();
     e.preventDefault();

    if(userInput.length === 5) {
     console.log("userInput", userInput);
    }
    else {
     alert("Please enter a 5 digit zip-code");
    }

  });
});