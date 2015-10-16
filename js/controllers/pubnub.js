app.controller('PubnubController', function($scope, PubNub, Pub) {
  $scope.cat = {};
  $scope.catForm = {};
  toastr.options.progressBar = true;
  toastr.options.closeButton = true;
  PubNub.init({
    subscribe_key:'sub-c-49943c4e-6d2a-11e5-945f-02ee2ddab7fe'
  });

  $scope.getCat = function() {
    Pub.getAll()
    .then(function(cat) {
      //console.log(lineas);
      $scope.cat = cat;
      PubNub.ngSubscribe({
        channel: 'cat',
        message: function(object){
          cat.name = object[0].name;
          cat.breed = object[0].breed;
          $scope.$apply();
        },
        error: function (error) {
          // Handle error here
          console.log(JSON.stringify(error));
        }
      });
    }, function(error){
      Materialize.toast("Something bad happened, and it's not your fault", 3000);
    });
  };

  $scope.updateCat = function(cat) {
    Pub.update($scope.cat, cat)
    .then(function(cat) {
      $catForm = {};
      toastr.success('Cat Updated !', '=D');
    }, function(error) {
      console.log(error);
    })
  };

  $scope.getCat();

})