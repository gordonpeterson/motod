( function () {
'use strict';
	
	/**
	 * @ngdoc function
	 * @name motodynastyApp:dashboardCtrl
	 * @description
	 * # dashboardCtrl
	 * The dashboardCtrl controller for motodynastyApp module. 
	 */

	angular
		.module('motodynastyApp')
		.controller('dashboardCtrl', dashboardCtrl);

	dashboardCtrl.$inject = [];

	/* @ngInject */
	function dashboardCtrl () {

		//jshint ignore:line
		var vm = this; 
		vm.controllerName = 'dashboardCtrl'; 
		vm.featured = [
			{
				'title': "SuperCross 1",
				'series': "supercross"
			},
			{
				'title': "MotoCross 1",
				'series': "motocross"
			},
			{
				'title': "SuperCross 2",
				'series': "supercross"
			},
			{
				'title': "MotoCross 2",
				'series': "motocross"
			}

		];



		vm.slideHasChanged = function ( index ) {
			console.log( 'current slide: ' + index );
		}
		vm.changeSlide = function ( index ) {
			console.log( 'change slide to : ' + index );
		}
		

		activate();

		function activate () {
			console.log( 'activated controller: ' + vm.controllerName );
		}

	}


})();
