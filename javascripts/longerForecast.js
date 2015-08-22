define(function(require) {
  var getTemplates = require("get-templates");

  return {
    get3day: function(ID) {
      $.ajax ({
      url:"http://api.openweathermap.org/data/2.5/forecast/daily?id=" + ID + "&units=imperial&cnt=3"
      }).done(function(data){
        for(var i = 0; i < data.list.length; i++) {

          var weather3 = {
            "day1": {
              "name": data.city.name,
              "max_temp": data.list[0].temp.max,
              "min_temp":data.list[0].temp.min,
              "weather": data.list[0].weather[0].description,
              "pressure": data.list[0].pressure,
              "wind-speed": data.list[0].speed,
              "humidity": data.list[0].humidity
            },
            "day2": {
              "name": data.city.name,
              "max_temp": data.list[1].temp.max,
              "min_temp":data.list[1].temp.min,
              "weather": data.list[1].weather[0].description,
              "pressure": data.list[1].pressure,
              "wind-speed": data.list[1].speed,
              "humidity":data.list[1].humidity
            },
            "day3": {
              "name": data.city.name,
              "max_temp": data.list[2].temp.max,
              "min_temp":data.list[2].temp.min,
              "weather": data.list[2].weather[0].description,
              "pressure": data.list[2].pressure,
              "wind-speed": data.list[2].speed,
              "humidity": data.list[2].humidity
            }

          };
          var populatedTemplate = getTemplates.weather3Tpl(weather3);
         
          $("#main").html(populatedTemplate);
          console.log("weather3", weather3);
        
        }
      })
      .fail(function (xhr, status, error){
        
      });
    },
    get7day: function(ID) {
      $.ajax({
      url:"http://api.openweathermap.org/data/2.5/forecast/daily?id=" + ID + "&units=imperial&cnt=7"
      }).done(function(data){
        console.log(data);
        for(var i = 0; i < data.list.length; i++) {

          var weather7 = {
            "day1": {
              "name": data.city.name,
              "max_temp": data.list[0].temp.max,
              "min_temp":data.list[0].temp.min,
              "weather": data.list[0].weather[0].description,
              "pressure": data.list[0].pressure,
              "wind-speed": data.list[0].speed,
              "humidity": data.list[0].humidity
            },
            "day2": {
              "name": data.city.name,
              "max_temp": data.list[1].temp.max,
              "min_temp":data.list[1].temp.min,
              "weather": data.list[1].weather[0].description,
              "pressure": data.list[1].pressure,
              "wind-speed": data.list[1].speed,
              "humidity":data.list[1].humidity
            },
            "day3": {
              "name": data.city.name,
              "max_temp": data.list[2].temp.max,
              "min_temp":data.list[2].temp.min,
              "weather": data.list[2].weather[0].description,
              "pressure": data.list[2].pressure,
              "wind-speed": data.list[2].speed,
              "humidity": data.list[2].humidity
            },
            "day4": {
              "name": data.city.name,
              "max_temp": data.list[3].temp.max,
              "min_temp":data.list[3].temp.min,
              "weather": data.list[3].weather[0].description,
              "pressure": data.list[3].pressure,
              "wind-speed": data.list[3].speed,
              "humidity": data.list[3].humidity
            },
            "day5": {
              "name": data.city.name,
              "max_temp": data.list[4].temp.max,
              "min_temp":data.list[4].temp.min,
              "weather": data.list[4].weather[0].description,
              "pressure": data.list[4].pressure,
              "wind-speed": data.list[4].speed,
              "humidity": data.list[4].humidity
            },
            "day6": {
              "name": data.city.name,
              "max_temp": data.list[5].temp.max,
              "min_temp":data.list[5].temp.min,
              "weather": data.list[5].weather[0].description,
              "pressure": data.list[5].pressure,
              "wind-speed": data.list[5].speed,
              "humidity": data.list[5].humidity
            },
            "day7": {
              "name": data.city.name,
              "max_temp": data.list[6].temp.max,
              "min_temp":data.list[6].temp.min,
              "weather": data.list[6].weather[0].description,
              "pressure": data.list[6].pressure,
              "wind-speed": data.list[6].speed,
              "humidity": data.list[6].humidity
            }
            
          };

          var populatedTemplate = getTemplates.weather7Tpl(weather7);
         
          $("#main").html(populatedTemplate);
          console.log("weather7", weather7);
        }
      })
      .fail(function (xhr, status, error){
        
      });
      
    }
  };
});