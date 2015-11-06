/* jshint strict: false */
/* jshint undef: true, unused: true */
if (!(typeof MochaWeb === 'undefined')){ // jshint ignore:line
	MochaWeb.testOnly(function(){
		describe('Server initialization', function(){
			it('should have a Meteor version defined', function(){
				chai.assert(Meteor.release);
			});
		});
	});
}
