define(['jquery'], function($) {
  return {
    addWeather: function(zipCode) {
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&units=imperial&APPID=1b7f1f7355165ced17dbbeaf8d5ed137"
      }).done(function(data) {
        
          console.log(data);

        });
      
    }
  };
});