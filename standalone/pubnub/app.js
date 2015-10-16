var app = angular.module('app', [
    'ngRoute',
    'ngAnimate',
    'pubnub.angular.service'
  ])
  .run(function($rootScope) {
    Parse.initialize("ParseKey", "ParseJavascriptKey");
    $rootScope.sessionUser = Parse.User.current();
  })
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider      
      .when('/pubnub', {
        templateUrl: 'views/pubnub.html',
        controller: 'PubnubController'
      })
      .otherwise({
        redirectTo: '/'
      })
  });