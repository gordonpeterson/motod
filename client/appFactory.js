( function () {
'use strict';

	/**
	* @ngdoc service
	* @name motodynastyApp:appFactory
	* @requires 
	* @requires 

	* @description
	* # appFactory
	* The appFactory factory for motodynastyApp module. 
	*/

	angular
		.module('motodynastyApp')
		.factory('appFactory', appFactory);


	/* @ngInject */
	function appFactory ( $rootScope ) {


		var obj = {};
		obj.factoryName = 'motodynastyApp.appFactory';
		obj.currentSeries = '';
		
		obj.setCurrentSeries = function ( series ){
			obj.currentSeries = series;
			$rootScope.$emit( 'seriesChanged', series );
		};

		return obj;
	}


})();
