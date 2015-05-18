(function() {
  'use strict';

  angular
    .module('app')
    .directive('creditCard', creditCard); // credit-card in HTML

    function creditCard() {
      return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
          // modelValue is actual value on scope, whereas viewValue is the string value of that displayed to the user.
          // they're basically the same.
          ngModel.$validators.creditCard = function(modelValue, viewValue) {
            if (!viewValue) {
              return true;
            }
            // do Luhn check and return bool
            var len = viewValue.length,
            mul = 0,
            prodArr = [[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],
            sum = 0;

            while (len--) {
              sum += prodArr[mul][parseInt(viewValue.charAt(len), 10)];
              mul ^= 1;
            }

            return sum % 10 === 0 && sum > 0;
          }
        }
      };
    }

}());
