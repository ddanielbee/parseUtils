app.controller('GetController', function($scope, Get) {
  $scope.languages = [];

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