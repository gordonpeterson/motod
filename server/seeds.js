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
			id : '1',
			slug : 'mec',
			name : "Monster Energy Cup",
			description : "The Monster Energy Cup description text",
			series : [],
		},
		{
			id : '2',
			slug : 'mx',
			name : "Pro Moto X",
			description : "The Pro Moto X description text",
			series : [],
		},
		{
			id : '3',
			slug : 'superx',
			name : "AMA Supercross Championship",
			description : "The AMA Supercross Championship description text",
			series : [],
		},
		{
			id : '4',
			slug : 'mxgp',
			name : "MXGP",
			description : "The MXGP description text",
			series : [],
		},
		{
			id : '5',
			slug : 'motogp',
			name : "MotoGP",
			description : "The MotoGP description text",
			series : [],
		},
		{
			id : '6',
			slug : 'arenax',
			name : "ArenaCross",
			description : "The ArenaCross description text",
			series : [],
		},
		{
			id : '7',
			slug : 'nascar',
			name : "NASCAR",
			description : "The NASCAR description text",
			series : [],
		}
	];
	

	_.each( seriesItems, function ( item ) {
		Series.insert( item );
		console.log( item.id + '. inserted: ' + item.slug + " - " + item.name );
	})
}