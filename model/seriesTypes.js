/* jshint strict: false */
/* globals SeriesTypes: true */
/* exported SeriesTypes*/
SeriesTypes= new Mongo.Collection('seriesTypes');

SeriesTypes.available = function () {
	return SeriesTypes.find( {available : true} );
};

SeriesTypes.addRaceClass = function ( seriesType, className, available ) {
	available = available === undefined ? true : false;
	var newRaceClass = {
		name: className,
		available: available
	};
	console.log( '--------------newRaceClass added to ------------');
	console.log( newRaceClass );
	// var added = SeriesTypes.update( {type:seriesType}, {$addToSet: {raceClasses: newRaceClass}}, { upsert: false });
	var added = SeriesTypes.update( {type:seriesType}, {$addToSet: {raceClasses: className}}, { upsert: false });
	console.log( seriesType + '.added = ' + added );
	console.log( ' ');
};

/* jshint unused: false */
SeriesTypes.allow({
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