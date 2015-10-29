( function () {
'use strict';
	
	/**
	 * @ngdoc function
	 * @name motodynasty:appCtrl
	 * @description
	 * # appCtrl
	 * The appCtrl controller for motodynasty module. This is the main controller for the app
	 */

	angular
		.module('motodynastyApp')
		.controller('appCtrl', appCtrl);

	/* @ngInject */
	function appCtrl ($rootScope, appFactory) {

		//jshint ignore:line
		var vm = this; 
		vm.controllerName = 'appCtrl'; 
		vm.selectedSeries = 'loading';
		

		activate();

		function activate () {
			console.log( 'activated controller: ' + vm.controllerName );
			$rootScope.$on('$stateChangeStart', onStateChange);
			$rootScope.$on('seriesChanged', onSeriesChange);

		}

		function onStateChange (event, toState, toParams, fromState, fromParams){ 
			var user = $rootScope.currentUser;

			console.dir( user );
			console.log(  toState.name + " >>>>> " + fromState.name );
		    // event.preventDefault(); 
		    // transitionTo() promise will be rejected with 
		    // a 'transition prevented' error
		};


		function onSeriesChange ( event, series ) {
			console.log( series );
			vm.selectedSeries = series._id;
		}



	}


})();
