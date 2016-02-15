'use strict';

var app = angular.module('App');

app.controller('findCtrl', function($state, $scope, beerSvc) {

  $scope.beer = '- - -';

  $scope.getRandomBeer = function() {
    console.log('get')
    beerSvc.getRandomBeer()
    .then(function(resp) {
      $scope.beer = resp;
    })
  }

});
