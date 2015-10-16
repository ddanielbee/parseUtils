app.factory('Get', function($q) {
  var Get = Parse.Object.extend('Languages', {

  }, {

    /**
     * Queries for all languages from Parse. 
     * @author Daniel Bolívar <daniel@eledelab.co>
     * @return {promise} Angular Promise
     */
    getAll: function() {
      var defer = $q.defer();
      var query = new Parse.Query(this);
      query.ascending('createdAt');
      query.find({
        success : function(languages) {
          defer.resolve(languages);
        },
        error : function(error) {
          defer.reject(error);
        }
      });
      return defer.promise;
    }
  });

  Object.defineProperty(Get.prototype, "name", {
    get: function() {
      return this.get("name");
    },
    set: function(value) {
      this.set("name", value);
    }
  });

  Object.defineProperty(Get.prototype, "abr", {
    get: function() {
      return this.get("abr");
    },
    set: function(value) {
      this.set("abr", value);
    }
  });

  return Get;
})