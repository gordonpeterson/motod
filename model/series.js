/* jshint strict: false */
/* globals Series: true */
/* exported: Series */

Series = new Mongo.Collection('series');

Series.getFeatured = function () {
	return Series.find( {featured : true} );
};

Series.addRound = function ( seriesId, index, roundName, startDate, endDate, available ) {

	Series.update( {_id:seriesId }, {
		$addToSet:{
			rounds: {
					index: index,
					name: roundName,
					startDate: startDate, 
					endDate: endDate,
					available: available || false
				}
		}
	});

	
};

Series.createSeries = function ( seriesType, seriesName, totalRounds, startDate, endDate, featured, available ) {
	var newSeries = {
		seriesId: seriesType._id,
		type : seriesType.type,
		name : seriesName,
		startDate : startDate,
		endDate : endDate,
		featured : featured,
		available : available
	};

	var newId = Series.insert( newSeries );
	for (var i = 0; i < totalRounds; i++) {
		var roundName = seriesName + ' round ' + (i+1);
		Series.addRound( newId, i, roundName, startDate, endDate, available );
	}

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



