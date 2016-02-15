'use strict';

var app = angular.module('App');

app.controller('navCtrl', function($scope, $state) {
  $scope.loggedIn = function() {
    return localStorage.getItem("token");
  }

  $scope.logOut = function() {
    localStorage.removeItem("token");
    $state.go('home');
  }

  $scope.getUsername = function() {
    var token = localStorage.getItem("token");
    if (token) {
      return JSON.parse(atob(token.split('.')[1])).username;
    } else {
      return '';
    }
  }

});
