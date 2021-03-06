// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }    
  });
})
.config(function($stateProvider, $urlRouterProvider, USER_ROLES) {
  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })
  .state('main',{
    url: '/',
    abstract: true,
    templateUrl: 'templates/main.html'

  })
  .state('main.dash',{
    url: 'main/dash',
    views: {
      'dash-tab':{
        templateUrl: 'templates/dashboard.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('main.public',{
    url: 'main/public',
    views: {
      'public-tab':{
        templateUrl: 'templates/public.html',
      }
    }
  })
  .state('main.admin',{
    url: 'main/admin',
    views: {
      'admin-tab':{
        templateUrl: 'templates/admin.html',
      }
    },
    data: {
      authorisedRoles: [USER_ROLES.admin] //Could have some more roles
    }
  });
  $urlRouterProvider.otherwise('/main/dash')

});