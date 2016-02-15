'use strict';

var app = angular.module('App');

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html' })
    
  $urlRouterProvider.otherwise('/');
});
