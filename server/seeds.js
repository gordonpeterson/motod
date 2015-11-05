/*jshint strict:false*/





if( Meteor.users.find().count() === 0 ){
	var id = Accounts.createUser({
		username : 'gordon',
		email : 'gordon@pixel-trix.com',
		password : 'admin1234',
		profile : { name : 'gordon peterson'},
		roles : []
	});

	Roles.addUsersToRoles( id, ['Administrator']);
	console.log( 'created default admin user: ' + id.username );
}


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
		// console.log( item.id + '. inserted: ' + item.slug + ' - ' + item.name );
	});
}


 if( Riders.find().count() === 0 ){
	var riderList = [
		{
			'points': [],
			'name': 'Tanner Berry',
			'race_number': 65,
			'team_id': 26
		}, {
			'points': [],
			'name': 'Tristan Charboneau',
			'race_number': 69,
			'team_id': 26
		}, {
			'points': [],
			'name': 'David Macfarlane',
			'race_number': 82,
			'team_id': 26
		}, {
			'points': [],
			'name': 'Jaden Weisenberger',
			'race_number': 95,
			'team_id': 26
		}, {
			'points': [],
			'name': 'Toshiki Tomita',
			'race_number': 718,
			'team_id': 18
		}, {
			'points': [],
			'name': 'Ricky Dietrich',
			'race_number': 539,
			'team_id': 18
		}, {
			'points': [],
			'name': 'Fuzzy Humphries',
			'race_number': 873,
			'team_id': 18
		}, {
			'points': [],
			'name': 'Tomasz Wysocki',
			'race_number': 831,
			'team_id': 24
		}, {
			'points': [],
			'name': 'Martin Krc',
			'race_number': 137,
			'team_id': 24
		}, {
			'points': [],
			'name': 'Jonas Nedved',
			'race_number': 202,
			'team_id': 24
		}, {
			'points': [],
			'name': 'Kaeden Kniffing',
			'race_number': 85,
			'team_id': 26
		}, {
			'points': [],
			'name': 'Bobby Piazza',
			'race_number': 637,
			'team_id': 18
		}, {
			'points': [],
			'name': 'Stephen Vertucci',
			'race_number': 209,
			'team_id': 18
		},{
			'points': [],
			'name': 'Kenny Henry',
			'race_number': 901,
			'team_id': 18
		}, {
			'points': [],
			'name': 'Jacob Grove',
			'race_number': 456,
			'team_id': 18
		}, {
			'points': [],
			'name': 'Sean Miller',
			'race_number': 786,
			'team_id': 18
		}, {
			'points': [],
			'name': 'AJ Gilbert',
			'race_number': 561,
			'team_id': 18
		}, {
			'points': [],
			'name': 'Jake Gagne',
			'race_number': 532,
			'team_id': 18
		}, {
			'points': [],
			'name': 'Austin Kouba',
			'race_number': 468,
			'team_id': 18
		},{
			'points': [],
			'name': 'Kyle Keast',
			'race_number': 464,
			'team_id': 18
		}, {
			'points': [],
			'name': 'Seth Rarick',
			'race_number': 672,
			'team_id': 18
		}, {
			'points': [],
			'name': 'Kaven Benoit',
			'race_number': 926,
			'team_id': 18
		}, {
			'points': [],
			'name': 'Jeremy Medaglia',
			'race_number': 141,
			'team_id': 18
		}, {
			'points': [],
			'name': 'John Hopper',
			'race_number': 875,
			'team_id': 18
		}
	];
	

	_.each( riderList, function ( item ) {
		Riders.insert( item );
		// console.log( item.id + '. inserted: ' + item.slug + ' - ' + item.name );
	});
}