/* jshint strict: false */
/* globals Series: true */
/* exported Series*/
Series = new Mongo.Collection('series');

Series.featured = function () {
	return Series.find( {featured : true} );
};

/* jshint unused: false */
Series.allow({
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