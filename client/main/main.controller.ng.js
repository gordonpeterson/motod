'use strict'

angular.module('motodynastyApp')
.controller('MainCtrl', function($scope, $meteor, $ionicScrollDelegate) {
  $scope.things = $scope.$meteorCollection(Things);
  $meteor.autorun($scope, function() {
    $scope.$meteorSubscribe('things');
  });

  $meteor.session('thingsCounter').bind($scope, 'page');
    
  $scope.save = function() {
    if($scope.form.$valid) {
      $scope.things.save($scope.newThing);
      $scope.newThing = undefined;
      $ionicScrollDelegate.resize();
    }
  };
      
  $scope.remove = function(thing) {
    $scope.things.remove(thing);
    $ionicScrollDelegate.resize();
  };
});