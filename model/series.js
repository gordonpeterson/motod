/* jshint strict: false */
/* globals Series: true */
/* exported Series*/
Series = new Mongo.Collection('series');

Series.featured = function () {
	return Series.find( {featured : true} );
};

/* jshint unused: false */
Series.allow({
	update : function ( userid, series ) {
		return isAdmin();
	},
	insert : function ( userid, series ) {
		return isAdmin();
	},
	remove : function ( userid, series ) {
		return isAdmin();
	}
});