/*jshint strict:false*/
Meteor.startup(function () {

	//################# REMOVE DATA #############
	// SeriesTypes.remove({}); 
	//################# REMOVE DATA #############

	console.dir( SeriesTypes.find().fetch() );
	if( SeriesTypes.find().count() === 0 ){

		var items = [
		{
			type : 'mx',
			available : true,
			raceClasses:[]
		},
		{
			type : 'mec',
			available : true,
			raceClasses:[]
		},
		{
			type : 'superx',
			available : true,
			raceClasses:[]
		},
		{
			type : 'mxgp',
			available : true,
			raceClasses:[]
		},
		{
			type : 'motogp',
			available : true,
			raceClasses:[]
		},
		{
			type : 'arenax',
			available : false,
			raceClasses:[]
		},
		{
			type : 'nascar',
			available : false,
			raceClasses:[]
		}
		];


		// console.log( '*********** insert items **************');
		items.forEach(function( item ) {
			SeriesTypes.insert(item); //...inserts the item
			// console.log( 'SeriesTypes.insert: ' );
			// console.dir( item );
		});

		// console.log( '*********** add classes **************');
		SeriesTypes.addRaceClass('mec','450');
		SeriesTypes.addRaceClass('mec','250 West');
		SeriesTypes.addRaceClass('mec','250 East');
		SeriesTypes.addRaceClass('mec','250 Shootout');
		SeriesTypes.addRaceClass('mx','250 MX');
		SeriesTypes.addRaceClass('mx','450 MX');
		SeriesTypes.addRaceClass('mxgp','MXGP Class');
		SeriesTypes.addRaceClass('mxgp','MX2 Class');
		SeriesTypes.addRaceClass('mxgp','MX2 Class', false );

		console.log( 'total SeriesTypes: ' + SeriesTypes.find().count() );

		// console.log( '*********** done **************');
	}
});