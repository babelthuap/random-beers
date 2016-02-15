'use strict';

var app = angular.module('App');

app.controller('navCtrl', function($state) {
  $state.loggedIn = function() {
    return true;
  }

});
