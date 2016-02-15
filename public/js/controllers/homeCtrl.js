'use strict';

var app = angular.module('App');

app.controller('homeCtrl', function($scope, userSvc) {

  $scope.register = function() {
    userSvc.register($scope.registerUsername, $scope.registerPassword)
    .then(function() {
      console.log('registered');
    })
  }

  $scope.logIn = function() {
    userSvc.login($scope.loginUsername, $scope.loginPassword)
    .then(function() {
      console.log('logged in');
    })
  }

});
