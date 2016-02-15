'use strict';

var app = angular.module('App');

app.service('beerSvc', function($http) {

  this.getRandomBeer = function() {
    return $http.get('/beer')
  }

});
