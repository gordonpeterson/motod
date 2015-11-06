Meteor.startup(function() {
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
});