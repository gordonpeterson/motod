( function () {
'use strict';
	
	/**
	 * @ngdoc function
	 * @name motodynastyApp:adminCtrl
	 * @description
	 * # adminCtrl
	 * The adminCtrl controller for motodynastyApp module. 
	 */

	angular
		.module('motodynastyApp')
		.controller('adminCtrl', adminCtrl);


	/* @ngInject */
	function adminCtrl ($meteor) {

		var vm = this; //jshint ignore:line
		vm.controllerName = 'adminCtrl'; 
		vm.seriesTypes = [];
		vm.selectedSeriesType = undefined;
		vm.totalRounds = 0;
		vm.minRounds = 0;

		vm.moreRounds = function () {
			vm.totalRounds++;
		};
		vm.lessRounds = function () {
			vm.totalRounds--;
			if (vm.totalRounds <= 0) {
				vm.totalRounds = 0;
			}
		};

		vm.createSeries = function () {
			debugger;
		};

		activate();

		function activate () {
			console.log( 'activated controller: ' + vm.controllerName );
			if( isAdmin() ){
				vm.seriesTypes = $meteor.collection( function () {
					return SeriesTypes.find({available:true});
				} );
			}


		}

	}


})();
	