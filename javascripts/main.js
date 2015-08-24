requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'firebase': '../lib/bower_components/firebase/firebase',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../lib/bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

    

requirejs(
  ["dependencies", "authentication", "longerForecast", "display-weather", "auth_zip"],
  function(dependencies, auth, longer, display, authZip) {

    
    
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
      }
    });
  } else {
      auth.setUid(authData.uid);
      require(["core-logic"], function() {});
  }   

});




  

