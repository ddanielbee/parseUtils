app.controller('PostController', function($scope, Post) {
  $scope.language = {};
  toastr.options.progressBar = true;
  toastr.options.closeButton = true;

/**
 * Saves an object to Parse
 * @author Daniel Bolívar <daniel@eledelab.co>
 * @param  {object} language The object to be saved
 * @return {void}          No return
 */
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

/**
 * Validates that fields are not empty (quite bad)
 * @author Daniel Bolívar <daniel@eledelab.co>
 * @param  {Object} language form fields
 * @return {bool}          If errors were found or not.
 */
  var simpleValidation = function(language) {
    var error = false;
    if(language.name == "" || language.name == undefined || language.name == null || language.abr == "" || language.abr == undefined || language.abr == null)
    {
      error = true;
    }
    return error;
  }
});