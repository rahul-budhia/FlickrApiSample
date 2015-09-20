'use strict';

describe('Directive: backimg', function () {

  // load the directive's module
  beforeEach(module('flickrappApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<backimg></backimg>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the backimg directive');
  }));
});
