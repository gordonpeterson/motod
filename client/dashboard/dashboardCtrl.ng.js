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
	function dashboardCtrl ( $scope, $meteor, $ionicScrollDelegate ) {

		//jshint ignore:line
		var vm = this; 
		vm.controllerName = 'dashboardCtrl'; 
		vm.featured = [];



		vm.slideHasChanged = function ( index ) {
			console.log( 'current slide: ' + index );
		}
		vm.changeSlide = function ( index ) {
			console.log( 'change slide to : ' + index );
		}
		

		activate();

		function activate () {
			console.dir( $meteor );
			console.dir( $scope );
			vm.featured = $scope.$meteorCollection( Series.featured );

		}

	}


})();
