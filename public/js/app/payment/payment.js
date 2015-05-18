(function() {
  'use strict';

  angular
    .module('app')
    .controller('PaymentController', PaymentController);

    function PaymentController(api, $location) {
      var vm = this;

      vm.submit = function() {
        vm.showProgress = true;
        return $location.url('/confirmation');
        // api.placeOrder(vm.card)
        //   .then(function(response){
        //     if (response && response.success) {
        //       return $location.url('/confirmation');
        //     }
        //     alert('Something went wrong...');
        //   })
      };
    }


}());
