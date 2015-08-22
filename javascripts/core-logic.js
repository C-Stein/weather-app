define(function(require) {
    var $ = require("jquery");
    var _ = require("lodash");
    var hbs = require("hbs");
    var firebase = require("firebase");
    var auth = require("authentication");
    var display = require("display-weather");
    var longer = require("longerForecast");
    var getTemplates = require("get-templates");



    $("#search").on("click", function() {
    var zipCode = $("#searchText").val();
    var weather = display.addWeather(zipCode);

        console.log("zipCode", zipCode);
        console.log("weather", weather);


    });



    $(document).on("click", '.threeDay', function() {
      zipCode = $("#searchText").val();
      weather = display.addWeather(zipCode);

      weather3 = longer.get3day(weather.id);

      console.log("weather3", weather3);
      console.log("weather.id", weather.id);
    });

    $(document).on("click", '.sevenDay', function() {
      var zipCode = $("#searchText").val();
      var weather = display.addWeather(zipCode);

      weather7 = longer.get7day(weather.id);

      console.log("weather7", weather7);
      console.log("weather.id", weather.id);

    });









});