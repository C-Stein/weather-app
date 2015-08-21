define(['jquery'], function($) {
  return {
    addWeather: function(zipCode) {
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&units=imperial&APPID=1b7f1f7355165ced17dbbeaf8d5ed137"
      }).done(function(data) {
        
          console.log(data);
        var weather = {
          "temp": data.main.temp,
          "id": data.id,
          "pressure": data.main.pressure,
          "wind-speed": data.wind.speed,
          "humidity": data.main.humidity
        }
        console.log("weather", weather);
      });
      return weather;
    }
  };
});