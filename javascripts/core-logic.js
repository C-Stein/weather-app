define(function(require) {
  var $ = require("jquery");
  var _ = require("lodash");
  var hbs = require("hbs");
  var firebase = require("firebase");
  var auth = require("authentication");
  var display = require("display-weather");

    
  $("#search").on("click", function(){
    var zipCode = $("#searchText").val();

    console.log("zipCode", zipCode);
    display.addWeather(zipCode);
  });









});
