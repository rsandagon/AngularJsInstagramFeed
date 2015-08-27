'use strict';

describe('Directive: galleryDirective', function () {

  // load the directive's module
  beforeEach(module('angularInstagramFeedApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<gallery-directive></gallery-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the galleryDirective directive');
  }));
});
