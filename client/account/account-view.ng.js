( function () {'use strict';

	/**
	 * @ngdoc directive

	 * @name motodynastyApp:account-view
	 * @description
	 * # account-view 
	 * The account-view directive for motodynastyApp module.  
	 */

	angular
		.module('motodynastyApp')
		.directive('accountView', accountView);

	accountView.$inject = [];

	/* @ngInject */
	function accountView () {

		var obj = {};
		
		obj.templateUrl = 'client/account/account-view.ng.html';
		obj.restrict = "AE"; 
		obj.replace = true;

		return obj;
	}

})();