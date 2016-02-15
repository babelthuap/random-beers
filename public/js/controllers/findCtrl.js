'use strict';

var app = angular.module('App');

app.controller('findCtrl', function($state, $scope, beerSvc) {

  $scope.beer = null;

  $scope.getRandomBeer = function() {
    console.log('get')
    beerSvc.getRandomBeer()
    .then(function(resp) {
      console.log(resp)
      $scope.beer = resp.data;
    })
  }

});
