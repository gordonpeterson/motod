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
	
	/* @ngInject */
	function accountCtrl ( $scope, $rootScope ) {
	
		var vm = this; //jshint ignore:line
		vm.controllerName = 'accountCtrl';
		vm.username = '';
		vm.isAdmin = false;
		vm.userType = 'guest';
		
	
		activate();
	
		function activate () {
			// console.log( 'activated controller: ' + vm.controllerName );
	
			var user = $rootScope.currentUser;
	
			if( user ){
				vm.username = user.username;
				vm.isAdmin = window.isAdmin();
				vm.userType = vm.isAdmin ? 'admin' : 'user';

	
			}
	
		}
	
	}
	

})();