var app = angular.module('app', [
    'ngRoute',
    'pubnub.angular.service'
  ])
  .run(function($rootScope) {
    Parse.initialize("ParseKey", "ParseJavascriptKey");
    $rootScope.sessionUser = Parse.User.current();
  })
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider      
      .when('/pubnub', {
        templateUrl: 'pubnubView.html',
        controller: 'PubnubController'
      })
      .otherwise({
        redirectTo: '/'
      })
  });