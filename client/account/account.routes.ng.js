'use strict'

angular.module('motodynastyApp')
.config(function($stateProvider) {
  $stateProvider
  .state('account', {
    url: '/account',
    templateUrl: 'client/account/account.view.ng.html'
  });
});