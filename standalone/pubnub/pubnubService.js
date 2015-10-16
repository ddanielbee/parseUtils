app.factory('Pub', function($q) {
  var Pub = Parse.Object.extend('Cat', {

  }, {

    /**
     * Gets objects from Parse
     * @author Daniel Bolívar <daniel@eledelab.co>
     * @return {promise} Angular Promise
     */
    getAll: function() {
      var defer = $q.defer();
      var query = new Parse.Query(this);
      query.first({
        success : function(cat) {
          defer.resolve(cat);
        },
        error : function(error) {
          defer.reject(error);
        }
      });
      return defer.promise;
    },

    /**
     * Updates an object from Parse
     * @author Daniel Bolívar <daniel@eledelab.co>
     * @param  {object} cat    old object
     * @param  {object} newCat new object
     * @return {promise}        Angular Promise
     */
    update: function(cat, newCat) {
      var defer = $q.defer();
      cat.set('name', newCat.name);
      cat.set('breed', newCat.breed);
      cat.save(null, {
        success: function(cat) {
          defer.resolve(cat);
        },
        error: function(cat, error) {
          defer.reject(error);
        }
      });
      return defer.promise;
    }
  });

  Object.defineProperty(Pub.prototype, "name", {
    get: function() {
      return this.get("name");
    },
    set: function(value) {
      this.set("name", value);
    }
  });

  Object.defineProperty(Pub.prototype, "breed", {
    get: function() {
      return this.get("breed");
    },
    set: function(value) {
      this.set("breed", value);
    }
  });

  return Pub;
});