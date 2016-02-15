'use strict';

var app = angular.module('App');

app.controller('findCtrl', function($state, $scope, beerSvc, userSvc) {
  
  if (!localStorage.getItem("token")) {
    $state.go('home');
  }

  $scope.beer = null;

  $scope.getRandomBeer = function() {
    console.log('get')
    beerSvc.getRandomBeer()
    .then(function(resp) {
      console.log(resp)
      $scope.beer = resp.data;
    })
  }

  $scope.addSampled = function() {
    userSvc.addSampled(beer.nameDisplay)
  }

});
