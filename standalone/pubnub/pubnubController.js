app.controller('PubnubController', function($scope, PubNub, Pub) {
  $scope.cat = {};
  $scope.catForm = {};
  toastr.options.progressBar = true;
  toastr.options.closeButton = true;
  PubNub.init({
    subscribe_key:'PubnubKey'
  });


  /**
   * Gets an object from Parse, and sets up the communication with Pubnub (ngsubscribe)
   * @author Daniel Bolívar <daniel@eledelab.co>
   * @return {void} 
   */
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

  /**
   * Updates an object from parse
   * @author Daniel Bolívar <daniel@eledelab.co>
   * @param  {object} cat updated object (form fields)
   * @return {void}    
   */
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