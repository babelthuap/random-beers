'use strict';

var app = angular.module('App');

app.controller('sampledCtrl', function($state, $scope, userSvc) {

  if (!localStorage.getItem("token")) {
    $state.go('home');
  }

  $scope.beers = null;

  userSvc.getSampledBeers()
  .then(function(resp) {
    $scope.beers = resp.data;
  }, function(err) {
    alert(err.data);
  })




});
