
/**
 * After Save Trigger to be used with Pubnub
 * @author Daniel Bolívar <daniel@eledelab.co>
 */
Parse.Cloud.afterSave("Cat", function(request) {
  var pubnub = { 
    'publish_key'   : 'PubnubPublishKey', 
    'subscribe_key' : 'PubNubSubscribeKey'
  };
  var channel = 'cat';
  var object = JSON.stringify(request.object);
  Parse.Cloud.httpRequest({
    url: 'http://pubsub.pubnub.com/publish/' + 
         pubnub.publish_key   +   '/' + 
         pubnub.subscribe_key + '/0/' + 
         channel          + '/0/' + 
         object,

    // SUCCESS CALLBACK
    success: function(httpResponse) {
        console.log(httpResponse.text);
    },

    // You should consider retrying here when things misfire
    error: function(httpResponse) {
        console.error('Request failed ' + httpResponse.status);
    }
  });
});