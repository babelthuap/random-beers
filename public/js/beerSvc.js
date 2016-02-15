'use strict';

var apiUrl = 'http://api.brewerydb.com/v2/beer/random?key=';
var apiKey = 'a48d948b32c325fe278f2b2211041388';

var app = angular.module('App');

console.log(apiUrl + apiKey);

app.service('beerSvc', function($http) {

  this.getRandomBeer = function() {
    return $http.get('/beer')
    .then(function(beer) {
      console.log(beer);
    })
  }

});
