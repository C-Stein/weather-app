define(['jquery', 'get-templates'], function($, getTemplates) {
  var weather;

  return {
    addWeather: function(zipCode) {
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&units=imperial&APPID=1b7f1f7355165ced17dbbeaf8d5ed137"
      }).done(function(data) {
        console.log(data);
         weather = {
          "city":data.name,
          "temp": data.main.temp,
          "weather":data.weather[0].description,
          "id": data.id,
          "dt": data.dt,
          "pressure": data.main.pressure,
          "wind-speed": data.wind.speed,
          "humidity": data.main.humidity
        };
        
        console.log("weather", weather); 
        var populatedTemplate = getTemplates.weatherTpl(weather);
       
        $("#main").html(populatedTemplate);
      });

      return weather;
    }
  };
});