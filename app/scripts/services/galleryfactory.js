'use strict';

/**
 * @ngdoc service
 * @name angularInstagramFeedApp.galleryFactory
 * @description
 * # galleryFactory
 * Factory in the angularInstagramFeedApp.
 */
angular.module('angularInstagramFeedApp')
  .factory('galleryFactory', ["$http",
    function($http) {
      return {
        fetchPopular: function(callback) {
          var endPoint = "https://api.instagram.com/v1/media/popular/?client_id=44f68e00bdbe4c088f7a240d0bef8678&callback=JSON_CALLBACK";

          $http.jsonp(endPoint).success(function(response) {
            callback(response.data);
          });
        }
      }
    }
  ]);
