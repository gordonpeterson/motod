( function () {
'use strict';
	
	/**
	 * @ngdoc function
	 * @name motodynastyApp:toolbarCtrl
	 * @description
	 * # toolbarCtrl
	 * The toolbarCtrl controller for motodynastyApp module. 
	 */

	angular
		.module('motodynastyApp')
		.controller('toolbarCtrl', toolbarCtrl);

	// toolbarCtrl.$inject = [' $ionicModal', '$scope'];

	/* @ngInject */
	function toolbarCtrl ( $ionicModal, $scope) {
		//jshint ignore:line
		var vm = this; 
		vm.controllerName = 'toolbarCtrl'; 
		vm.modal = {};
		vm.isModal = true;

		vm.openModal = function() {
			$ionicModal.fromTemplateUrl('client/account/account-view.ng.html', {
				scope: $scope,
				controller: vm,
				data: {'test': 'this is a test'},
				animation: 'slide-in-up'
			}).then(function(modal) {
				vm.modal = modal;
				vm.isModal = true;
				// vm.controller = vm;
				vm.modal.show();
				vm.backIcon = "ion-close";
			});
		};

		vm.closeModal = function () {
			if( vm.modal ) {
				vm.modal.hide();
			} else if ( $ionicHistory.enabledBack() ) {
				$ionicHistory.goBack();
			} else {
				$state.go('dashboard');
			}
		}
		

		activate();

		function activate () {
			console.log( 'activated controller: ' + vm.controllerName );
		}

	}


})();
