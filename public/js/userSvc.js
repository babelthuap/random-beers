'use strict';

var app = angular.module('App');

app.service('userSvc', function($http) {

  this.register = function(username, password) {
    return $http.post('/users/register', {
      username: username,
      password: password,
    })
    .then(function(resp) {
      localStorage.setItem("token", resp.data);
    })
  }

  this.login = function(username, password) {
    return $http.post('/users/login', {
      username: username,
      password: password,
    })
    .then(function(resp) {
      localStorage.setItem("token", resp.data);
    })
  }

  this.addSampled = function(name) {
    $http.post('/users/addsampled')
    .then(function(data) {
      console.log(data)
    })
  }

});
