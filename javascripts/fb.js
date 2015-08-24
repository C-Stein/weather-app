define(['facebook', "jquery"], function(fb, $){

  FB.init({
    method: '881545438549447',
    version: 'v2.3'
  });
  FB.getLoginStatus(function(response) {
    console.log(response);
  });
$("#search").on("click", function() {
  var zipCode = $("#searchText").val();
  var weather = display.addWeather(zipCode);
    FB.ui({
    method: 'feed',
    link: 'https://developers.facebook.com/docs/',
    caption: 'An example caption',
  }, function(response){});

});
});