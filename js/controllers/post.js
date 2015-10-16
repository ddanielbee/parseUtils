app.controller('PostController', function($scope, Post) {
  $scope.language = {};
  toastr.options.progressBar = true;
  toastr.options.closeButton = true;

  $scope.saveLanguage = function(language) {
    if(!simpleValidation(language))
    {
      Post.saveLanguage(language)
      .then(function(result) {
        $scope.language = {};
        toastr.success('Data Added !', '=D');
      }, function(error) {
        toastr.error("Something bad happened, and it's not your fault", 'Oops !');
      })
    } else
    {
      toastr.error("Fill the form please", 'Oops !');
    }
  };

  var simpleValidation = function(language) {
    var error = false;
    if(language.name == "" || language.name == undefined || language.name == null || language.abr == "" || language.abr == undefined || language.abr == null)
    {
      error = true;
    }
    return error;
  }
});