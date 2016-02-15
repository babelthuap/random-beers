'use strict';

var app = angular.module('App');

app.controller('homeCtrl', function($scope, userSvc) {

  $scope.register = function() {
    userSvc.register($scope.registerUsername, $scope.registerPassword)
    .then(function(token) {
      console.log(token);
    })
  }

});
