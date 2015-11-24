// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })  

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'SearchCtrl'
      }
    }
  })
    .state('app.config', {
    url: '/config',
    views: {
      'menuContent': {
        templateUrl: 'templates/config.html',
        controller: 'AppCtrl'
      }
    }
  })
  .state('app.cuento', {
    url: '/cuento',
    views: {
      'menuContent': {
        templateUrl: 'templates/cuento.html',
        controller: 'CuentoCtrl'
      }
    }
  })

  .state('app.cuento2', {
    url: '/cuento2',
    views: {
      'menuContent': {
        templateUrl: 'templates/cuento2.html'
      }
    }
  })

  .state('app.mejores', {
    url: '/mejores_cuentos',
    views: {
      'menuContent': {
        templateUrl: 'templates/mejores_cuentos.html',
        controller: 'SearchCtrl'
      }
    }
  })
  .state('app.mejores_autores', {
    url: '/mejores_autores',
    views: {
      'menuContent': {
        templateUrl: 'templates/mejores_autores.html',
        controller: 'SearchCtrl'
      }
    }
  })
  .state('app.favoritos', {
    url: '/favoritos',
    views: {
      'menuContent': {
        templateUrl: 'templates/favoritos.html',
        controller: 'SearchCtrl'
      }
    }
  })
  .state('app.user', {
    url: '/user/:userId',
    views: {
      'menuContent': {
        templateUrl: 'templates/user.html',
        controller: 'UserCtrl'
      }
    }
  })
  .state('app.escribe', {
    url: '/escribe',
    views: {
      'menuContent': {
        templateUrl: 'templates/escribe.html',
        controller: 'UserCtrl'
      }
    }
  })

    

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/cuento');
});
