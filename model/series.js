/* jshint strict: false */
/* globals Series: true */
/* exported Series*/
Series = new Mongo.Collection('series');

Series.getFeatured = Series.featured = function () {
	return Series.find( {featured : true} );
};

Series.addRound = function ( seriesType, index, roundName, startDate, endDate, available ) {
	// 'test', 'A Test Series', 'Dec 12, 2015', 'May 28,2015', true, true
	// console.log( 'series: ' + seriesType + 'rounds[' + index + '] =' + roundName + '. available:' + available );
	// console.log( '   start:' + startDate + ', end:'+endDate );


	Series.update({type:'mec'}, {
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
		type : seriesType,
		name : seriesName,
		startDate : startDate,
		endDate : endDate,
		featured : featured,
		available : available
	};

	Series.update( { type: seriesType }, {$set: newSeries}, {upsert:true} );
	for (var i = 0; i < totalRounds; i++) {
		var roundName = seriesName + ' round ' + (i+1);
		Series.addRound( seriesType, i, roundName, startDate, endDate, available );
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