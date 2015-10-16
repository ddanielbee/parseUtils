app.controller('CounterController', function($scope, Counter) {
  $scope.counter = {};

/**
 * Gets the counter
 * @author Daniel Bolívar <daniel@eledelab.co>
 * @return {void} Doesn't return anything, but assigns value on success.
 */
  $scope.getCounter = function() {
    Counter.getCounter()
    .then(function(counter) {
      $scope.counter = counter;
    }, function(error) {
      console.log(error);
    });
  };

  $scope.getCounter();
});