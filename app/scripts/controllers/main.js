(function(){
'use strict';

angular.module('aiHireApp').controller('MainCtrl', MainCtrl);
  MainCtrl.$inject = ['$scope','$state'];
  function MainCtrl($scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.aiHireClick = function(){
    	console.log("aiHireClick");
    };
  }
})();
