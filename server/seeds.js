if( Meteor.users.find().count() === 0 ){
	var id = Accounts.createUser({
		username : "gordon",
		email : "gordon@pixel-trix.com",
		password : "admin1234",
		profile : { name : "gordon peterson"},
		roles : []
	});

	Roles.addUsersToRoles( id, ["Administrator"]);
	console.log( 'created default admin user: ' + id.username );
}


 if( Series.find().count() === 0 ){
	var seriesItems = [
	
		{
			_id : 'mec',
			name : "Monster Energy Cup",
			description : "The Monster Energy Cup description text",
			available: true,
			featured: true,
			series : [],
		},
		{
			_id : 'mx',
			name : "Pro Moto X",
			description : "The Pro Moto X description text",
			available: true,
			featured: true,
			series : [],
		},
		{
			_id : 'superx',
			name : "AMA Supercross Championship",
			description : "The AMA Supercross Championship description text",
			available: true,
			featured: true,
			series : [],
		},
		{
			_id : 'mxgp',
			name : "MXGP",
			description : "The MXGP description text",
			available: true,
			featured: true,
			series : [],
		},
		{
			_id : 'motogp',
			name : "MotoGP",
			description : "The MotoGP description text",
			available: true,
			featured: true,
			series : [],
		},
		{
			_id : 'arenax',
			name : "ArenaCross",
			description : "The ArenaCross description text",
			available: true,
			featured: true,
			series : [],
		},
		{
			_id : 'nascar',
			name : "NASCAR",
			description : "The NASCAR description text",
			available: true,
			featured: false,
			series : [],
		}
	];
	

	_.each( seriesItems, function ( item ) {
		Series.insert( item );
		console.log( item.id + '. inserted: ' + item.slug + " - " + item.name );
	})
}