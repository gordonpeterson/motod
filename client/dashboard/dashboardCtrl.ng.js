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

	/* @ngInject */
	function dashboardCtrl ( $scope, appFactory ) {

		var vm = this; //jshint ignore:line
		vm.controllerName = 'dashboardCtrl'; 
		vm.featured = [];
		vm.selectedSeries = {};



		vm.slideHasChanged = function ( index ) {
			vm.selectedSeries = vm.featured[index];
			appFactory.setCurrentSeries( vm.selectedSeries );
		};
		vm.changeSlide = function ( index ) {
			console.log( 'change slide to : ' + index );
		};
		

		activate();

		function activate () {
			
			vm.featured = $scope.$meteorCollection( Series.featured );
			if (vm.featured.length > 0 ) {
				vm.selectedSeries = vm.featured[0];
				vm.selectedSeries._id = vm.featured[0]._id || 'not-found';
				appFactory.setCurrentSeries( vm.selectedSeries );
				
			}


		}


	}


})();
