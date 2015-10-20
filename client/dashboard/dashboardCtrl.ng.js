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
	function dashboardCtrl ( $scope, $meteor ) {

		//jshint ignore:line
		var vm = this; 
		vm.controllerName = 'dashboardCtrl'; 
		vm.featured = [];
		vm.selectedSeries = {};



		vm.slideHasChanged = function ( index ) {
			console.log( 'current slide: ' + index );
			vm.selectedSeries = vm.featured[index];
			console.log( vm.featured[index] );
		}
		vm.changeSlide = function ( index ) {
			console.log( 'change slide to : ' + index );
		}
		

		activate();

		function activate () {
			vm.featured = $scope.$meteorCollection( Series.featured );
			if (vm.featured.length > 0 ) {
				vm.selectedSeries = vm.featured[0];
				vm.selectedSeries.slug = vm.featured[0].slug || 'not-found';
			};
		}

	}


})();
