/*jshint strict:false*/
Meteor.startup(function () {

	//################# REMOVE DATA #############
	Series.remove({}); 
	//################# REMOVE DATA #############

	if( Series.find().count() === 0 ){
		var seriesItems = [
		
			{
				type : 'mec',
				name : 'Monster Energy Cup',
				start_date : new Date(2015, 9, 10 ),
				end_date : new Date(2015, 9, 17, 19, 30),
				location: {
					description : 'Somewhere,IN 12345',
					latitude: 'lat_value',
					longitude: 'long_value'
				},
				available: true,
				featured: true,
				rounds : [],
			},
			{
				type : 'mx',
				name : 'Pro Moto X',
				start_date : new Date(2015, 9, 10 ),
				end_date : new Date(2015, 9, 17, 19, 30),
				location: {
					description : 'Somewhere,IN 12345',
					latitude: 'lat_value',
					longitude: 'long_value'
				},
				available: true,
				featured: true,
				rounds : [],
			},
			{
				type : 'superx',
				name : 'AMA Supercross Championship',
				start_date : new Date(2015, 9, 10 ),
				end_date : new Date(2015, 9, 17, 19, 30),
				location: {
					description : 'Somewhere,IN 12345',
					latitude: 'lat_value',
					longitude: 'long_value'
				},
				available: true,
				featured: true,
				rounds : [],
			},
			{
				type : 'mxgp',
				name : 'MXGP',
				start_date : new Date(2015, 9, 10 ),
				end_date : new Date(2015, 9, 17, 19, 30),
				location: {
					description : 'Somewhere,IN 12345',
					latitude: 'lat_value',
					longitude: 'long_value'
				},
				available: true,
				featured: true,
				rounds : [],
			},
			{
				type : 'motogp',
				name : 'MotoGP',
				start_date : new Date(2015, 9, 10 ),
				end_date : new Date(2015, 9, 17, 19, 30),
				location: {
					description : 'Somewhere,IN 12345',
					latitude: 'lat_value',
					longitude: 'long_value'
				},
				available: true,
				featured: true,
				rounds : [],
			},
			{
				type : 'arenax',
				name : 'ArenaCross',
				start_date : new Date(2015, 9, 10 ),
				end_date : new Date(2015, 9, 17, 19, 30),
				location: {
					description : 'Somewhere,IN 12345',
					latitude: 'lat_value',
					longitude: 'long_value'
				},
				available: true,
				featured: true,
				rounds : [],
			},
			{
				type : 'nascar',
				name : 'NASCAR',
				start_date : new Date(2015, 9, 10 ),
				end_date : new Date(2015, 9, 17, 19, 30),
				location: {
					description : 'Somewhere,IN 12345',
					latitude: 'lat_value',
					longitude: 'long_value'
				},
				available: true,
				featured: false,
				rounds : [],
			}
		];
		
	
		_.each( seriesItems, function ( item ) {
			Series.insert( item );
			console.log( item.id + '. inserted: ' + item.slug + ' - ' + item.name );
		});


		console.log( ' ********************* create series ****************** ' );
		Series.createSeries( 'test', 'Test Series', 10, 'December 1, 2015', 'May 28, 2016', false, false );

		Series.update({type:'mec'}, {
			$addToSet:{
				rounds: 
					{
						index: 0,
						name: 'Test Series round 1',
						startDate: 'December 2, 2015', 
						endDate: 'May 28, 2016',
						available: false
					}
			}
		});

		Series.createSeries( 'test', 'Test Series', 13, 'December 1, 2015', 'May 28, 2016', true, false );
	}	

});