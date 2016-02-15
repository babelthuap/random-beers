'use strict';

var app = angular.module('App');

app.directive('beer', function() {
  return {
    restrict: "AE",
    templateUrl: "html/beer.html",
    scope: {
      beer: "@"
    },
    controller: function($scope) {
      'use strict';
    }
  };
})
