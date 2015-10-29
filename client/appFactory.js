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

	appFactory.$inject = ['$http', '$q'];

	/* @ngInject */
	function appFactory ( $http, $q ) {

		var _currentSeries,
				_seriesPromise = $q.defer();

		var obj = {};
		
		obj.factoryName = 'motodynastyApp.appFactory';
		obj.setCurrentSeries = function ( series ){
			_currentSeries = series;
			_seriesPromise.notify( _currentSeries );
		};
		obj.getCurrentSeries = function () {
			return _seriesPromise.promise;
		};

		obj.loadSomething = function () {
			var q = $q.defer();
			$http.get('http://path/to/service')
				.success( function( data ){
					q.resolve( data );
				})
				.error( function( error ){
					console.warn( error );
					q.reject( error );
				});
			
			return q.promise;
		};

		return obj;
	}


})();
