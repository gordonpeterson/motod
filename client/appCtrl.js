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

	appCtrl.$inject = ['$rootScope'];

	/* @ngInject */
	function appCtrl ($rootScope) {

		//jshint ignore:line
		var vm = this; 
		vm.controllerName = 'appCtrl'; 
		

		activate();

		function activate () {
			console.log( 'activated controller: ' + vm.controllerName );
			$rootScope.$on('$stateChangeStart', onStateChange);
		}

		function onStateChange (event, toState, toParams, fromState, fromParams){ 
			var user = $rootScope.currentUser;

			console.dir( user );
			console.log(  toState.name + " >>>>> " + fromState.name );
		    // event.preventDefault(); 
		    // transitionTo() promise will be rejected with 
		    // a 'transition prevented' error
		};



	}


})();
