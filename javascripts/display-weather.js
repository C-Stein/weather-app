define(['jquery', 'get-templates'], function($, getTemplates) {
  var weather;
  return {
    addWeather: function(zipCode) {
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&units=imperial&APPID=1b7f1f7355165ced17dbbeaf8d5ed137"
      }).done(function(data) {
        
          console.log(data);
         weather = {
          "temp": data.main.temp,
          "id": data.id,
          "pressure": data.main.pressure,
          "wind-speed": data.wind.speed,
          "humidity": data.main.humidity
        }
        console.log("weather", weather); 
        var populatedTemplate = getTemplates.weatherTpl(weather);
       
        $("#main").html(populatedTemplate);
         return weather;
      });

    }
  };
});