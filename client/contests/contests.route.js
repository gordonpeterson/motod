'use strict'

angular.module('motodynastyApp')
.config(function($stateProvider) {
	$stateProvider
	.state('my-contests', {
		url: '/my-contests',
		templateUrl: 'client/contests/my-contests.ng.html'
	})
	.state('open-contests', {
		url: '/open-contests',
		templateUrl: 'client/contests/open-contests.ng.html'
	})
	;
});