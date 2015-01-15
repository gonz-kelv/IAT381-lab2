'use strict';

/**
 * @ngdoc overview
 * @name myappApp
 * @description
 * # myappApp
 *
 * Main module of the application.
 */
angular
  .module('myappApp', [
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/Home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/About', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/Contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
