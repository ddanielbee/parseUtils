app.factory('Counter', function($q) {
  var Counter = Parse.Object.extend('Counter', {

  }, {
    /**
     * Calls Counter From Parse
     * @author Daniel Bolívar <daniel@eledelab.co>
     * @return {promise} Angular Promise
     */
    getCounter: function() {
      var defer = $q.defer();
      var query = new Parse.Query(this);
      query.equalTo('type', 'languages');
      query.first({
        success : function(counter) {
          defer.resolve(counter);
        },
        error : function(error) {
          defer.reject(error);
        }
      });
      return defer.promise;
    }
  });

  Object.defineProperty(Counter.prototype, "count", {
    get: function() {
      return this.get("count");
    },
    set: function(value) {
      this.set("count", value);
    }
  });

  return Counter;
});