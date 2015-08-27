'use strict';

describe('Service: galleryFactory', function () {

  // load the service's module
  beforeEach(module('angularInstagramFeedApp'));

  // instantiate service
  var galleryFactory;
  beforeEach(inject(function (_galleryFactory_) {
    galleryFactory = _galleryFactory_;
  }));

  it('should do something', function () {
    expect(!!galleryFactory).toBe(true);
  });

});
