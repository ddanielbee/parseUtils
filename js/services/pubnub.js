app.factory('Pub', function($q) {
  var Pub = Parse.Object.extend('Cat', {

  }, {
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