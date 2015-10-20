/* jshint ignore:start */
angular.module('motodynastyApp', [
  'angular-meteor',
  'ngAnimate', 
  'ionic'
]);

onReady = function() {
  angular.bootstrap(document, ['motodynastyApp']);
};
  
if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
/* jshint ignore:end */


