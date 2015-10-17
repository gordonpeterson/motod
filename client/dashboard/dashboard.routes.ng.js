'use strict'

angular.module('motodynastyApp')
.config(function($stateProvider) {
	$stateProvider
	.state('dashboard', {
		url: '/',
		templateUrl: 'client/dashboard/dashboard.view.ng.html'
	});
});