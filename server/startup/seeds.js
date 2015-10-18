if( Meteor.users.find().count() === 0 ){
	var id = Accounts.createUser({
		username : "gordon",
		email : "gordon@pixel-trix.com",
		password : "admin1234",
		profile : { name : "gordon peterson"},
		roles : []
	});

	Roles.addUsersToRoles( id, ["Administrator"]);
	console.log( 'created admin user');
}


