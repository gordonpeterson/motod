angular.module('motodynastyApp', [
  'angular-meteor',
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