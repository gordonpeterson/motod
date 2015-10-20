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

/* @ngInject */
function accountCtrl ( $scope, $rootScope, $meteor ) {

	//jshint ignore:line
	var vm = this; 
	vm.controllerName = 'accountCtrl';
	vm.username = '';
	vm.isAdmin = false;
	

	activate();

	function activate () {
		console.log( 'activated controller: ' + vm.controllerName );

		var user = $rootScope.currentUser;

		if( user ){
			vm.username = user.username;
			vm.isAdmin = window.isAdmin();

		}

	}

}

