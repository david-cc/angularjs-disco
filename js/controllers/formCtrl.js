/* global angular */
angular.module('app')
  .controller('FormCtrl', function($location, genres, AlbumSvc) {
    this.genres = genres;

    this.createAlbum = function (form, album) {
      if (form.$invalid) return;

      var newAlbum = angular.copy(album);
      // appel du service
      var id = AlbumSvc.createAlbum(newAlbum);
      // reset
      Object.keys(album).forEach(k => delete album[k]);

      // redirect
      $location.path('/article/' + id);
      $location.path(`/article/${id}`);
    };

  });
