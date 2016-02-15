'use strict';

var app = angular.module('App');

app.service('userSvc', function($http, $scope, $localStorage) {

  this.register = function(username, password) {
    $scope.$storage = $localStorage;

    return $http.post('/users/register', {
      username: username,
      password: password,
    })
    .then(function(resp) {
      $scope.$storage.token = resp.data;
    })
  }

});
