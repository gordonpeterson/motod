( function () {
'use strict';
	
	/**
	 * @ngdoc function
	 * @name motodynastyApp
	 * @description
	 * The motodynastyApp module. 
	 */

		angular
		.module('motodynastyApp', [
			'angular-meteor',
			'ngAnimate', 
			'ionic',
			'ui.router'
		])
		
		.config( function() {
			console.log('motodynastyApp config()')
		})
		
		.run( function() {
			console.log('motodynastyApp run()')
		})

		if(Meteor.isCordova) {
			angular.element(document).on('deviceready', onReady);
		} else {
			angular.element(document).ready(onReady);
		}

		function onReady ( event ) {
			angular.bootstrap(document, ['motodynastyApp']);
		}

})(); 

