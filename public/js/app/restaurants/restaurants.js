(function(){
  'use strict';

  angular
    .module('app')
    .controller('RestaurantsController', RestaurantsController);

    //RestaurantsController.$inject = ['api'];

    function RestaurantsController($routeParams) {
      this.data = 'the data'; //use {{ vm.data }} in the view
      // bc we have controllerAs: 'vm' within route-config.js

     this.restaurants = [
        {
          "id": 1,
          "name": "McDonalds",
          "cuisine": "Fine Dining",
          "menu": [
          {
            "name": "item1",
            "price": 1,
            "description": "lol it's tasty"
          },
          {
            "name": "item2",
            "price": 2,
            "description": "very gooood"
          }
          ]
        },
        {
          "id": 2,
          "name": "Burger King",
          "cuisine": "Gourmet Burgers",
          "menu": [
            {
              "name": "item3",
              "price": 3,
              "description": "mmm burger king quenches my hunger"
            },
            {
              "name": "item4",
              "price": 4,
              "description": "moar moar MOAR!"
            }
          ]
        },
        {
          "id": 3,
          "name": "Carl's Junior",
          "cuisine": "Absolute Crap",
          "menu": [
            {
              "name": "item5",
              "price": 5,
              "description": "oooh baby baby carl's junior"
            },
            {
              "name": "item6",
              "price": 6,
              "description": "yay last one!"
            }
          ]
        }
      ];

      this.restaurantId = $routeParams.restId;
      console.log("restId is " + $routeParams.restId);

    //   // BEGINNING if api worked
    // var vm = this;

    // api.getRestaurants(){
      //.then(function(data){
        //vm.restaurants = data;
     // });
    // }
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
