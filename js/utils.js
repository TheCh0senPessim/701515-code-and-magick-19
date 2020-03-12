'use strict';

(function () {
  window.utils = {
    getMaxElement: function (arr) {
      var maxElement = arr[0];
      for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
      return maxElement;
    }
  };
})();
