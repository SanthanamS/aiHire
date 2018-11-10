'use strict';

describe('Controller: RegistorCtrl', function () {

  // load the controller's module
  beforeEach(module('aiHireApp'));

  var RegistorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistorCtrl = $controller('RegistorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegistorCtrl.awesomeThings.length).toBe(3);
  });
});
