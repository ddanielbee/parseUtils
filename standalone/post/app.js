var app = angular.module('app', [
    'ngRoute'
  ])
  .run(function($rootScope) {
    Parse.initialize("ParseKey", "ParseJavascriptKey");
    $rootScope.sessionUser = Parse.User.current();
  })
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider      
      .when('/post', {
        templateUrl: 'views/postView.html',
        controller: 'PostController'
      })
      .otherwise({
        redirectTo: '/'
      })
  });