'use strict';

/**
 * @ngdoc overview
 * @name flickrappApp
 * @description
 * # flickrappApp
 *
 * Main module of the application.
 */
angular
  .module('flickrappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
