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
		

		activate();

		function activate () {
			console.log( 'activated controller: ' + vm.controllerName );
		}

	}


})();
