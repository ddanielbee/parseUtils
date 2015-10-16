app.factory('Post', function($q) {
  var Post = Parse.Object.extend('Languages', {

  }, {
    saveLanguage: function(language) {
      var Language = new Post();
      var defer = $q.defer();
      Language.set('name', language.name);
      Language.set('abr', language.abr);
      Language.save(null, {
        success: function(result) {
          defer.resolve(result);
        },
        error: function(language, error) {
          defer.reject(error);
        }
      });

      return defer.promise;
    }
  });
  return Post;
});