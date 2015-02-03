'use strict';

/**
 * @ngdoc service
 * @name developmentApp.
 * @description
 * #
 * Factory in the developmentApp.
 */
angular.module('developmentApp')
  .factory('_', function ($window) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
