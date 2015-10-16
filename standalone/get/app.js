var app = angular.module('app', [
    'ngRoute'
  ])
  .run(function($rootScope) {
    Parse.initialize("ParseKey", "ParseJavascriptKey");
    $rootScope.sessionUser = Parse.User.current();
  })
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider      

      .when('/get', {
        templateUrl: 'views/getView.html',
        controller: 'GetController'
      })

      .otherwise({
        redirectTo: '/'
      })
  });