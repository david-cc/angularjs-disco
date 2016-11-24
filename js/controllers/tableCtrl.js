/* global angular */
angular.module('app')
  .controller('TableCtrl', function(AlbumSvc) {
    this.albums = [];
    this.albumKeys = [];
    this.gravatarSize = 100;

    AlbumSvc.getAlbums().then((albums) => {
      this.albums = albums;
      this.albumKeys = Object.keys(this.albums[0]);
    });

    this.order = 'title';
    this.reverse = false;
    this.filter = {};

    this.selectedAlbum = null;

    this.sort = function(order) {
      this.order = order;
      this.reverse = !this.reverse;
    };
  });
