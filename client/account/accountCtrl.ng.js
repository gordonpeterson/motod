( function () {
'use strict';
	
	/**
	 * @ngdoc function
	 * @name motodynastyApp:accountCtrl
	 * @description
	 * # accountCtrl
	 * The accountCtrl controller for motodynastyApp module. 
	 */

	angular
		.module('motodynastyApp')
		.controller('accountCtrl', accountCtrl);

	accountCtrl.$inject = [];

	/* @ngInject */
	function accountCtrl () {

		//jshint ignore:line
		var vm = this; 
		vm.controllerName = 'accountCtrl'; 
		

		activate();

		function activate () {
			console.log( 'activated controller: ' + vm.controllerName );
		}

	}


})();
