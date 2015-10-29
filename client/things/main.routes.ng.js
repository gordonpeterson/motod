'use strict'

angular.module('motodynastyApp')
.config(function($stateProvider) {
  $stateProvider
  .state('things', {
    url: '/things',
    templateUrl: 'client/things/main.view.ng.html',
    controller: 'thingsCtrl'
  });
});