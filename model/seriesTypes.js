/* jshint strict: false */
/* globals SeriesTypes: true */
/* exported SeriesTypes*/
SeriesTypes= new Mongo.Collection('seriesTypes');

SeriesTypes.available = function () {
	return SeriesTypes.find( {available : true} );
};

/* jshint unused: false */
SeriesTypes.allow({
	update : function ( query, document ) {
		return isAdmin();
	},
	insert : function ( query, document ) {
		return isAdmin();
	},
	remove : function ( query, document ) {
		return isAdmin();
	}
});