'use strict';

/**
 * @ngdoc function
 * @name developmentApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the developmentApp
 */
angular.module('developmentApp')
  .controller('RegisterCtrl', function($scope, user) {
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
    $scope.register = function() {
      //alert($scope.email + " " + $scope.password);
      if ($scope.password !== $scope.confirmPassword) {
        alert('Password miss match --');
      } else {
        user.registerUser($scope.email, $scope.password);
      }

    };
  });
