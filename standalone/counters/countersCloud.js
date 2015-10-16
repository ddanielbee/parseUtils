var Counter = Parse.Object.extend("Counter");

/**
 * After Save Trigger for incrementing counter
 * @author Daniel Bolívar <daniel@eledelab.co>
 * @param  {Object} Parse Request (result)
 * @param  {Object}     
 * @return {void}   CloudCode calls either success or error.
 */
Parse.Cloud.afterSave("Languages", function(request) {
  if(request.object.updatedAt.getTime() == request.object.createdAt.getTime()) 
  {
    var query = new Parse.Query(Counter);
    query.equalTo('type', 'languages');
    query.first({
      success: function(counter) {
        counter.increment('count', 1);
        counter.save();
      },
      error: function(error) {
        console.error("Got an error " + error.code + " : " + error.message);
      }
    })
  }
});