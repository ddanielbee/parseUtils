var app = angular.module('app', [
    'ngRoute',
    'ngAnimate',
    'pubnub.angular.service'
  ])
  .run(function($rootScope) {
    Parse.initialize("inv0AmNUKA43qzmTiDqrUBXPXpWiFvPti4Mb2baf", "sxKU2WeftY4nmB82k49SiXNcAjVaJpWRCSxKYQbu");
    $rootScope.sessionUser = Parse.User.current();
  })
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/main.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
            }
        }  
      })
      .when('/get', {
        templateUrl: 'views/simple-get.html',
        controller: 'GetController',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
            }
        }  
      })
      .when('/post', {
        templateUrl: 'views/simple-post.html',
        controller: 'PostController',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
            }
        }  
      })
      .when('/counter', {
        templateUrl: 'views/counter.html',
        controller: 'CounterController',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
            }
        }  
      })
      .when('/pubnub', {
        templateUrl: 'views/pubnub.html',
        controller: 'PubnubController',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
            }
        }  
      })
      .otherwise({
        redirectTo: '/'
      })
  });