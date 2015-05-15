(function(){
  'use strict';

  angular
    .module('app')
    .controller('RestaurantsController', RestaurantsController);

    //RestaurantsController.$inject = ['$http'];

    function RestaurantsController() {
      //var vm = this;
      this.data = 'the data'; //use {{ vm.data }} in the view
      // bc we have controllerAs: 'vm' within route-config.js

      this.restaurants = [
        {
          "name": "McDonalds"
        },
        {
          "name": "Burger King"
        },
        {
          "name": "Carl's Junior"
        }
      ];

    //   // BEGINNING if api worked
    // $http.get('/orders/api/restaurants')
    //     .then(function(response){
    //       vm.restaurants = response.data;
    //     },
    //     function(reason) {
    //       console.log(reason);
    //     })
    //     .catch(function(err){
    //       console.log(err);
    //     })
    }
}());
  //END if api worked
// vm is viewmodel - glue between controller and view
// $scope is somewhat interchangeable with vm?
