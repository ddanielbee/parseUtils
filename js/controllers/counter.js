app.controller('CounterController', function($scope, Counter) {
  $scope.counter = {};

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