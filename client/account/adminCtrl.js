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
		vm.selectedSeriesType = '';
		vm.seriesName = '';
		vm.totalRounds = 0;
		vm.featured = false;
		vm.available = false;
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
			Series.createSeries( vm.selectedSeriesType, vm.seriesName, vm.totalRounds, new Date(), new Date(), vm.featured, vm.available )
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
	