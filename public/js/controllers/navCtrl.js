'use strict';

var app = angular.module('App');

app.controller('navCtrl', function($scope) {
  $scope.loggedIn = function() {
    return true;
  }

});
