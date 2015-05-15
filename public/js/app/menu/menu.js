// not currently using this
(function(){
  'use strict';

  angular
    .module('app')
    .controller("MenuController", MenuController);

    MenuController.$inject = ['api', '$routeParams'];

    function MenuController(api) {

      this.restaurants = [
        {
          "id": 1,
          "name": "McDonalds",
          "cuisine": "Fine Dining",
          "menu": [
          "item1", "item2", "item3"
          ]
        },
        {
          "id": 2,
          "name": "Burger King",
          "cuisine": "Gourmet Burgers",
          "menu": [
          "item4", "item5", "item6"
          ]
        },
        {
          "id": 3,
          "name": "Carl's Junior",
          "cuisine": "Absolute Crap",
          "menu": [
          "item7", "item8", "item9"
          ]
        }
      ];

      var vm = this;

      // api.getRestaurantDetails($routeParams.restId)
      //   .then(function(data) {
      //     vm.restaurant = data;
      //   });
    }

}());
