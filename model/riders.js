/* jshint strict: false */
/* globals Riders: true */
/* exported Riders*/
Riders = new Mongo.Collection('riders');

Riders.getSeries = function ( currentSeries ) {
	return Riders.find( {series : currentSeries} );
};

/* jshint unused: false */
Riders.allow({
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