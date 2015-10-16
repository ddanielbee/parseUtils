app.controller('GetController', function($scope, Get) {
  $scope.languages = [];

  /**
   * Gets all rows from Parse Table
   * @author Daniel Bolívar <daniel@eledelab.co>
   * @return {void} No return, but assigns values on success.
   */
  $scope.getAll = function() {
    Get.getAll()
    .then(function(languages) {
      $scope.languages = languages;
    }, function(error) {
      console.log(error);
    })
  };
  $scope.getAll();

})