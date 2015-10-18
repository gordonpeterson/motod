Series = new Mongo.Collection('series');

Series.featured = function () {
	var featuredSkus = ['mec', 'motox', 'supercross' ];
	return Series.find( {sku : {$in : featuredSkus}},
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