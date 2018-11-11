'use strict';

/**
 * @ngdoc function
 * @name aiHireApp.controller:EmployeerCtrl
 * @description
 * # EmployeerCtrl
 * Controller of the aiHireApp
 */
 angular.module('aiHireApp')
 .controller('EmployeerCtrl',['$scope', '$location', function ($scope, $location){

 	var scopeControl = $scope;
 	scopeControl.model = {};
  scopeControl.originalModel = {};
 	scopeControl.availableJobs = [];
  var currentUser;
  var portalExistingJobs = {};
  //currentUser = angular.fromJson(sessionStorage.getItem('currentUserName'));
 for (var i = 0; i < sessionStorage.length; i++) {
    var key = sessionStorage.key(i);
    if(key){
      var value =null;
     //value = angular.fromJson(sessionStorage.getItem(key));
     value = sessionStorage.getItem(key);
      portalExistingJobs[key] = value;
    }
  }
  currentUser= portalExistingJobs['currentUserName'];
  var createdJobs = portalExistingJobs[currentUser];
   if(createdJobs){
      scopeControl.availableJobs = angular.copy(angular.fromJson(createdJobs));

  }

 	scopeControl.submit = function(jobId){
  		//console.log('submit',scopeControl.model);
  		if(jobId > -1){
  			angular.forEach(scopeControl.availableJobs, function(availableJob,index){
  				if(availableJob.id === jobId){
  					scopeControl.availableJobs.splice(index,1,scopeControl.model.job);
  				}
  			});
  		}else{
  			scopeControl.model.job.id = scopeControl.availableJobs.length+1;
  			scopeControl.availableJobs.push(scopeControl.model.job);
  		}
      //sessionStorage.currentUser = angular.copy(scopeControl.availableJobs);
      sessionStorage.setItem(currentUser, angular.copy(angular.toJson(scopeControl.availableJobs)));
  		scopeControl.model = {};
  		//scopeControl.myForm.$setPristine();	
  	};

  	scopeControl.editJob = function(index){
  		if(index > -1){
  			angular.forEach(scopeControl.availableJobs, function(availableJob, jobindex){
  				if(jobindex === index){
  					scopeControl.model.job = angular.copy(availableJob);
            scopeControl.originalModel = angular.copy(scopeControl.model);
  				}
  			});
  		}
  	};

  	scopeControl.removeJob = function(index){
        if(index > -1){
        angular.forEach(scopeControl.availableJobs, function(availableJob,jobIndex){
          if(jobIndex === index){
            scopeControl.availableJobs.splice(jobIndex, 1);
          }
        });
      }
  	};

  	scopeControl.reset = function(jobId){
      if(isEmpty(scopeControl.originalModel)){
        scopeControl.model = {};
      }else{
         scopeControl.model = angular.copy(scopeControl.originalModel);
      }
  	};

    scopeControl.disableReset = function(){
      var flag = false;
        if(isEmpty(scopeControl.model)){
          flag = true;
        }
      return flag;

    };

  	scopeControl.getAllJobs = function(){
  		return scopeControl.availableJobs;
  	};

    function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key)){
          return false;
        }
            
    }
    return true;
}

  }]);
