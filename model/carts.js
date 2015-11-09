/* jshint strict: false */
/* globals Carts: true */
/* exported: Carts*/

Carts = new Mongo.Collection('carts');

Carts.getCart = function ( userKey ) {
	var cart = Carts.findOne( {userKey: userKey});
	if( !cart ) {
		cart = {
			userKey : userKey,
			created_at : new Date(),
			items : [],
			notes : {
				note : 'Cart Created',
				created_at : new Date(),
			},
			status : 'open',
			itemCount : 0,
			total : 0
		};
	}

	return cart;
};
 
Carts.allow({
  insert: function (userKey, contest) {
    return userKey && contest.owner === userKey;
  },
  update: function (userKey, contest, fields, modifier) {
    return userKey && contest.owner === userKey;
  },
  remove: function (userKey, contest) {
    return userKey && contest.owner === userKey;
  }
});


