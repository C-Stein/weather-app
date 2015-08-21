define(['jquery'], function($) {
  return {
    addWeather: function() {
      //var ref = new Firebase("https://nss-weather.firebaseio.com");
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast/city?id=" + zipCode + "&units=imperial&APPID=1b7f1f7355165ced17dbbeaf8d5ed137"
      }).done(function(data) {
        //ref.child(data.Title.toLowerCase()).set({
          "main": data.temp
        });
      });
    }
  };
});