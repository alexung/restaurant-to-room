(function(){
  'use strict';

  angular
    .module('app')
    .controller('RestaurantsController', RestaurantsController);

    function RestaurantsController() {
      this.data = 'the data'; //use {{ vm.data }} in the view
    }
}());
// vm is viewmodel - glue between controller and view
