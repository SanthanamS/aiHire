'use strict';

/**
 * @ngdoc function
 * @name aiHireApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the aiHireApp
 */
angular.module('aiHireApp')
  .controller('LoginCtrl', ['$scope', '$location', function ($scope, $location) {
    /*this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
*/
    var scopeControl = $scope;
    scopeControl.userModel ={};

    scopeControl.submit = function(){
      sessionStorage.setItem('currentUserName', scopeControl.userModel.username);
    	$location.path('employeer');
    };

  }]);
