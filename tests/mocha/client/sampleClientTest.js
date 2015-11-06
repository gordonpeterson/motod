/* jshint strict: false */
/* jshint undef: true, unused: true */
if (!(typeof MochaWeb === 'undefined')){ // jshint ignore:line
	MochaWeb.testOnly(function(){
		describe('a group of tests', function(){
			it('should respect equality', function(){
				chai.assert.equal(5,5);
			});
			it( 'should do something else', function () {
				chai.asser.equal(4,5);
			});
		});
	});
}
