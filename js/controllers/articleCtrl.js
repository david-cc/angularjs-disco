/* global angular */
angular.module('app')
  .controller('ArticleCtrl', function($routeParams, AlbumSvc) {
    console.log($routeParams);
    this.selected = AlbumSvc.getAlbum(Number($routeParams.id));
  });
