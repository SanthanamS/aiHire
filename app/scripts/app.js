'use strict';

/**
 * @ngdoc overview
 * @name aiHireApp
 * @description
 * # aiHireApp
 *
 * Main module of the application.
 */
angular
  .module('aiHireApp', [
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/registor', {
        templateUrl: 'views/registor.html',
        controller: 'RegistorCtrl',
        controllerAs: 'registor'
      })
      .when('/employeer', {
        templateUrl: 'views/employeer.html',
        controller: 'EmployeerCtrl',
        controllerAs: 'employeer'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
