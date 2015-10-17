'use strict';

/**
 * @ngdoc function
 * @name motodynastyApp:aboutCtrl
 * @description
 * # aboutCtrl
 * The aboutCtrl controller for motodynastyApp module. 
 */

angular
	.module('motodynastyApp')
	.controller('aboutCtrl', aboutCtrl);

/* @ngInject */
function aboutCtrl () {

	//jshint ignore:line
	var vm = this; 
	vm.controllerName = 'aboutCtrl'; 
	

	activate();

	function activate () {
		console.log( 'activated controller: ' + vm.controllerName );
	}

}


