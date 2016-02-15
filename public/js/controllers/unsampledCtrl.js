'use strict';

var app = angular.module('App');

app.controller('unsampledCtrl', function($state, $scope, beerSvc) {

  if (!localStorage.getItem("token")) {
    $state.go('home');
  }

  $scope.beers = null;

});
