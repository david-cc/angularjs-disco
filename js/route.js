/* global angular */
angular.module('app')
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<h1>Bienvenue</h1>'
    })
    .when('/table', {
      templateUrl: 'views/table.html',
      controller: 'TableCtrl as tableCtrl'
    })
    .when('/form', {
      templateUrl: 'views/form.html',
      controller: 'FormCtrl as formCtrl'
    })
    .when('/article/:id', {
      templateUrl: 'views/article.html',
      controller: 'ArticleCtrl as articleCtrl'
    })
    .otherwise('/');
});
