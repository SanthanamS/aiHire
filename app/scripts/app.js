(function(){
'use strict';

/**
 * @ngdoc overview
 * @name aiHireApp
 * @description
 * # aiHireApp
 *
 * Main module of the application.
 */
angular.module('aiHireApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ]).config(configFn);
  configFn.$inject = ['$urlRouterProvider','$stateProvider'];

  function configFn($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/main');
    $stateProvider.state('main', {
         url:'/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
     /*$stateProvider.state('about', {
        url:'/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
      $stateProvider.state('login', {
        url:'/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      });
      $stateProvider.state('registor', {
        url:'/registor',
        templateUrl: 'views/registor.html',
        controller: 'RegistorCtrl',
        controllerAs: 'registor'
      });
      $stateProvider.state('employeer', {
        url:'/employeer',
        templateUrl: 'views/employeer.html',
        controller: 'EmployeerCtrl',
        controllerAs: 'employeer'
      });
      $stateProvider.state('admin', {
        url:'/admin',
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      });*/
  }
})();
