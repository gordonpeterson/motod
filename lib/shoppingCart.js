/* jshint strict: false */
/* globals Products: true */
/* globals Carts: true */
/* globals userKey: true */
/* globals getCart: true */

if( Meteor.isClient ) {

	userKey = localStorage.getItem('user_key');
	if( !userKey ) {
		userKey = Meteor.uuid();
		localStorage.setItem('user_key', userKey );
	}

	getCart = function ( next ) {
		Meteor.call( 'getCart', next );
	};
}

if( Meteor.isServer ) {
	

	Meteor.methods({
		getCart: function ( userKey ) {
			return Series.getCart( userKey );
		},

		addToCart: function ( userKey, sku ) {
			var cart = Meteor.call( 'getCart', userKey );
			//...get the item from the cart
			var found = _.find( cart.items, function ( item ) {
				return item.sku === sku;
			});

			if( found ){
				found.quantity++;
			} else {
				var product = Products.bySku( sku );
				var item = {
					sku: product.sku,
					name: product.name,
					description: product.description,
					image: product.image,
					discount: 0,
					added_at: new Date(),
					quantity: 1
				};
				cart.items.push( item );
			}

			cart.notes.push({
				note: sku + ' added to cart',
				created_at : new Date()
			});

			Meteor.call( 'saveCart', cart );
			return cart;

		},

		removeFromCart: function ( userKey, sku ) {
			var cart = Meteor.call( 'getCart', userKey );
			//...get the item from the cart
			var found = _.find( cart.items, function ( item ) {
				return item.sku === sku;
			});

			if( found ) {
				var foundIndex = cart.items.indexOf( found );
				cart.items.splice(  foundIndex, 1 );
				cart.notes.push( {
					note: sku + ' removed from cart',
					created_at: new Date(),
				});
				Meteor.call( 'saveCart', cart );

			} else {

			}
		},
		saveCart: function ( cart ) {
			cart.updated_at = new Date();
			var counter = 0;
			_.each( cart.items, function ( item ) {
				item.lineTotal = (item.price - item.discount ) * item.quantity;
				cart.total += item.lineTotal;
				counter++;
			});
			cart.itemCount = counter;
			Carts.update( {userKey : cart.userKey}, cart, {upsert: true} );
			return cart;
		},
		emptyCart: function ( userKey ) {
			Carts.remove( {userKey: userKey})
		}
	});
}