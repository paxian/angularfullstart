'use strict';

/**
 * @ngdoc function
 * @name angularfullstartApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularfullstartApp
 */
angular.module('angularfullstartApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
