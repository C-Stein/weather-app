define(function(require) {
  

  return {
    get3day: function(ID) {
      $.ajax({
      url:"http://api.openweathermap.org/data/2.5/forecast/daily?id=" + ID + "&units=imperial&cnt=3"
      }).done(function(data){

        var weather3 = {
          "day1": {
            "temp": data,
            "pressure": data,
            "wind-speed": data,
            "humidity": data
          },
          "day2": {
            "temp": data,
            "pressure": data,
            "wind-speed": data,
            "humidity":data
          },
          "day3": {
            "temp": data,
            "pressure": data,
            "wind-speed": data,
            "humidity": data
          }

        };

        return weather3;
        
      })
      .fail(function (xhr, status, error){
        
      });
    },
    get7day: function(zip) {
      $.ajax({
      url:"http://api.openweathermap.org/data/2.5/forecast/daily?id=" + ID + "&units=imperial&cnt=7"
      }).done(function(data){
        
        var weather7 = {
          "day1": {
            "temp": data,
            "pressure": data,
            "wind-speed": data,
            "humidity": data
          },
          "day2": {
            "temp": data,
            "pressure": data,
            "wind-speed": data,
            "humidity":data
          },
          "day3": {
            "temp": data,
            "pressure": data,
            "wind-speed": data,
            "humidity": data
          },
          "day4": {
            "temp": data,
            "pressure": data,
            "wind-speed": data,
            "humidity": data
          },
          "day5": {
            "temp": data,
            "pressure": data,
            "wind-speed": data,
            "humidity": data
          },
          "day6": {
            "temp": data,
            "pressure": data,
            "wind-speed": data,
            "humidity": data
          },
          "day7": {
            "temp": data,
            "pressure": data,
            "wind-speed": data,
            "humidity": data
          }

        };

        return weather7;        
      })
      .fail(function (xhr, status, error){
        
      });
    }
  };
});