Series = new Mongo.Collection('series');

Series.featured = function () {
	var featuredSlugs = ['mec', 'mx', 'supercross', 'mxgp', 'motogp', 'arenax', 'nascar' ];
	return Series.find( {slug : {$in : featuredSlugs}},
		{ fields : { hidden1: false, hidden2: false }})
};


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
})