'use strict';

var app = angular.module('App');

app.service('userSvc', function($http) {

  this.register = function(username, password) {
    return $http({
      method: 'POST',
      url: '/users/register',
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`
      },
      data: {
        username: username,
        password: password,
      }
    })
    .then(function(resp) {
      localStorage.setItem("token", resp.data);
    }, function(err) {
      alert(err.data);
    })
  }

  this.login = function(username, password) {
    return $http({
      method: 'POST',
      url: '/users/login',
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`
      },
      data: {
        username: username,
        password: password,
      }
    })
    .then(function(resp) {
      localStorage.setItem("token", resp.data);
    }, function(err) {
      alert(err.data);
    })
  }

  this.addSampled = function(name) {
    $http({
      method: 'POST',
      url: '/users/addsampled',
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`
      },
      data: { beer: name }
    })
    .then(function(data) {
      console.log(data)
    }, function(err) {
      alert(err.data);
    })
  }

});
