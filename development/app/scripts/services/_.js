'use strict';

/**
 * @ngdoc service
 * @name developmentApp.
 * @description
 * #
 * Making lodash injectable.
 */
angular.module('developmentApp')
  .factory('_', function ($window) {
      return $window._;
    
  });
