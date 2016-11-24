/* global angular */
angular.module('app')
  .filter('initials', function() {
    return function(input) {
      var names = input.split(' ');
      return input + ' (' + names[0][0].toUpperCase() + '. ' + names[1][0].toUpperCase() + '.)';
    };
  })
  .filter('truncate', function() {
    return function(input, length) {
      return input.substring(0, length) + '';
    };
  })
  .filter('pluck', function () {
    const pluck = key => item => item[key];

    return function (input, key) {
      return input.map(pluck(key));
    };
  })
  .filter('sum', function () {
    const add = (a, b) => a + b;

    return function (input) {
      return input.reduce(add, 0);
    };
  })
  .filter('average', function (sumFilter) {
    const not = fn => (...args) => !fn(...args);
    return function (input) {
      const realYears = input
        .map(Number)
        .filter(not(isNaN));
      return sumFilter(realYears) / realYears.length;
    };
  });
