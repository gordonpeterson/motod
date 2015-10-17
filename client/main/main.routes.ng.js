'use strict'

angular.module('motodynastyApp')
.config(function($stateProvider) {
  $stateProvider
  .state('things', {
    url: '/things',
    templateUrl: 'client/main/main.view.ng.html',
    controller: 'MainCtrl'
  });
});