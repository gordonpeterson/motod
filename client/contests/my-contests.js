'use strict';

/**
 * @ngdoc directive

 * @name motodynastyApp:my-contests
 * @description
 * # my-contests 
 * The my-contests directive for motodynastyApp module.  
 */

angular
	.module('motodynastyApp')
	.directive('myContests', myContests);

myContests.$inject = [];

/* @ngInject */
function myContests () {

	var obj = {};
	
	obj.templateUrl = '/client/contests/my-contests.ng.html';
	obj.restrict = "AE"; 
	obj.replace = true;

	return obj;
}
