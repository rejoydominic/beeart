'use strict';

/**
 * @ngdoc service
 * @name developmentApp.user
 * @description
 * # user
 * Service in the developmentApp.
 */
angular.module('developmentApp')
  .service('user', function user() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var user = {
      currentUser: "rd"
    };

    user.registerUser = function(email, password) {
      var user = new Parse.User();
      user.set('username', email);
      user.set('password', password);
      user.set('email', email);

      user.signUp(null, {
        success: function(user) {
          // Hooray! Let them use the app now.
          console.log("user added");
        },
        error: function(user, error) {
          // Show the error message somewhere and let the user try again.
          console.log("Error: " + error.code + " " + error.message);
        }
      });
    };


    return user;



  });
