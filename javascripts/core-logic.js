define(function(require) {
  var $ = require("jquery");
  var _ = require("lodash");
  var hbs = require("hbs");
  var firebase = require("firebase");
  var auth = require("authentication");
  var display = require("display-weather");
  var longer = require("longerForecast");

    
  $("#search").on("click", function(){
    var zipCode = $("#searchText").val();

    console.log("zipCode", zipCode);
    weather = display.addWeather(zipCode);
  });

   $(document).on("click", '.threeDay', function() {

      weather3 = longer.get3Day(weather.id);
   });

   $(document).on("click", '.sevenDay', function() {

      weather7 = longer.get7Day(weather.id);
   });









});
