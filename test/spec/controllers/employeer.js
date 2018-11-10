'use strict';

describe('Controller: EmployeerCtrl', function () {

  // load the controller's module
  beforeEach(module('aiHireApp'));

  var EmployeerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmployeerCtrl = $controller('EmployeerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmployeerCtrl.awesomeThings.length).toBe(3);
  });
});
