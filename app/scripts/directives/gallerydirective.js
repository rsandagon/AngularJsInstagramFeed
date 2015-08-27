'use strict';

/**
 * @ngdoc directive
 * @name angularInstagramFeedApp.directive:galleryDirective
 * @description
 * # galleryDirective
 */
angular.module('angularInstagramFeedApp')
  .directive('galleryDirective', function () {
    return {
      template: '<div><div class="pics">' +
      '<ul class="row show-grid">' +
    '<li ng-repeat="p in pics" class="col-md-3">' +
    '<a colorbox="colorbox" rel="colorbox" href="{{p.images.standard_resolution.url}}" target="_blank">' +
      '<img class="img-thumbnail" ng-src="{{p.images.low_resolution.url}}" />' +
      '</a>' +
      '</li>' +
      '</ul>' +
      '</div></div>',
      restrict: 'E',
      controller:'GalleryControllerCtrl'
    };
  });
