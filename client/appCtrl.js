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

	appCtrl.$inject = [];

	/* @ngInject */
	function appCtrl () {

		//jshint ignore:line
		var vm = this; 
		vm.controllerName = 'appCtrl'; 
		

		activate();

		function activate () {
			console.log( 'activated controller: ' + vm.controllerName );
		}

	}


})();
