/* global angular */
angular.module('app')
.factory('AlbumSvc', function($http) {
  // public
  return {
    getAlbums() {
      return $http.get('http://localhost:3000/albums')
      .then((resHttp) => resHttp.data);
    },

    getAlbum(id) {
      return albums.find(x => x.id === id);
    },

    createAlbum(album) {
      album.id = ++id;
      albums.push(album);
      return id;
    }
  };
});
