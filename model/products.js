/* jshint strict: false */
/* globals Products: true */
/* exported Products*/
Products = new Mongo.Collection('products');

Products.bySku = function (sku) {
	return Products.findOne( {sku : sku} );
};

Products.featured = function () {
	var featured = ['mec', 'mx'];
	return Products.find( {sku: {$in: featured} }, 
		{fields: {invetory: false, cost: false} 
	});
};

/* jshint unused: false */
Products.allow({
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