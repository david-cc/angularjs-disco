/* global angular, md5 */
angular.module('app')
.directive('gravatar', function () {

	// DDO
  return {
    restrict: 'E',
    scope: {
      email: '@email', // copie la valeur de l'attribut email
      size: '<size' // copie la valeur de l'attribut size et surveille ses modifications
    },
    transclude: true,
    template: '<span ng-transclude></span><img alt="gravatar" src="http://gravatar.com/avatar/{{ email | md5 }}?size={{ size }}"></img>'
  };
})
.filter('md5', function() {
  return function (input) {
    return md5(input);
  };
});
