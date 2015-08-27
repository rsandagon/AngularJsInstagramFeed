'use strict';

/**
 * @ngdoc function
 * @name angularInstagramFeedApp.controller:GallerycontrollerCtrl
 * @description
 * # GalleryControllerCtrl
 * Controller of the angularInstagramFeedApp
 */
angular.module('angularInstagramFeedApp')
  .controller('GalleryControllerCtrl', ["$scope", "galleryFactory",
    function($scope, instagram) {
      $scope.$watch('total', function() {});
      $scope.pics = [];

      instagram.fetchPopular(function(data) {
        console.log($scope.total);
        $scope.pics = data.splice(0, $scope.total);
      });
    }
  ]);
