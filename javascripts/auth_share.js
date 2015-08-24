define(function(require) {
    var $ = require("jquery");
    var _ = require("lodash");
    var hbs = require("hbs");
    var firebase = require("firebase");
    var auth = require("authentication");
    var display = require("display-weather");
    var longer = require("longerForecast");
    var getTemplates = require("get-templates");
  
 
    var ref = new Firebase("https://nss-weather.firebaseio.com/");
    var authData = ref.getAuth();

    if (authData === null) {

      ref.authWithOAuthPopup("github", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          auth.setUid(authData.uid);
          require(["core-logic"], function() {});
           (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
        }
      });
    } else {
        auth.setUid(authData.uid);
        require(["core-logic"], function() {});
    }   
        

});