'use strict'

angular.module('motodynastyApp')
.config(function($stateProvider) {
  $stateProvider
  .state('my-contests', {
    url: '/my-contests',
    templateUrl: 'client/contests/my-contests.ng.html',
    controller: 'AboutCtrl'
  });
});