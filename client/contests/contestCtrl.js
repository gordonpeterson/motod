'use strict';

/**
 * @ngdoc function
 * @name motodynastyApp:contestCtrl
 * @description
 * # contestCtrl
 * The contestCtrl controller for motodynastyApp module. 
 */

angular
	.module('motodynastyApp')
	.controller('contestCtrl', contestCtrl);

contestCtrl.$inject = [];

/* @ngInject */
function contestCtrl () {

	//jshint ignore:line
	var vm = this; 
	vm.controllerName = 'contestCtrl'; 
	

	activate();

	function activate () {
		console.log( 'activated controller: ' + vm.controllerName );
	}

}


