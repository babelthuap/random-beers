'use strict';

var app = angular.module('App');

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html', controller: 'homeCtrl' })
    .state('find', { url: '/find', templateUrl: '/html/find.html', controller: 'findCtrl' })
    .state('unsampled', { url: '/unsampled', templateUrl: '/html/unsampled.html', controller: 'unsampledCtrl' })
    .state('sampled', { url: '/sampled', templateUrl: '/html/sampled.html', controller: 'sampledCtrl' })
    
  $urlRouterProvider.otherwise('/');
});
