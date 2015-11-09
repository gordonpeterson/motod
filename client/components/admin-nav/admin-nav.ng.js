( function () {'use strict';

	/**
	 * @ngdoc directive

	 * @name motodynastyApp:admin-nav
	 * @description
	 * # admin-nav 
	 * The admin-nav directive for motodynastyApp module.  
	 */

	angular
		.module('motodynastyApp')
		.directive('adminNav', adminNav);

	/* @ngInject */
	function adminNav () {

		var obj = {};
		
		obj.templateUrl = 'client/components/admin-nav/admin-nav.ng.html';
		obj.restrict = 'AE'; 
		obj.replace = true;

		return obj;
	}

})();