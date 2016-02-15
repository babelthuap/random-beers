'use strict';

var app = angular.module('App');

app.controller('homeCtrl', function($scope, $state, userSvc) {

  if (localStorage.getItem("token")) {
    $state.go('find');
  }

  $scope.register = function() {
    userSvc.register($scope.registerUsername, $scope.registerPassword)
    .then(function() {
      console.log('registered');
      $state.go('find');
    })
  }

  $scope.logIn = function() {
    userSvc.login($scope.loginUsername, $scope.loginPassword)
    .then(function() {
      console.log('logged in');
      $state.go('find');
    })
  }

});
