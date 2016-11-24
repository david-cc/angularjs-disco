/* global angular */
angular.module('app', ['ngMessages', 'ngRoute'])
.config(function($logProvider) {
  $logProvider.debugEnabled(true);
});
