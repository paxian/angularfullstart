'use strict';

/**
 * @ngdoc function
 * @name angularfullstartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularfullstartApp
 */
angular.module('angularfullstartApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
