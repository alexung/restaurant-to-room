'use strict';

angular
  .module('app', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.otherwise({redirectTo: '/restaurants'});
  }]);
  // reason we have $routeProvider as the first
  // value in the array is so that even when we
  // minify this file, the $routeProvider value is
  //untouched

  // now should redirect us to
  //localhost:3000/orders#/restaurants
