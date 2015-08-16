'use strict';

var app = angular.module('starter', [
  'ionic',
  'WOYControllers',
  'WOYServices',
  'LocalStorageService'
])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
      .state('tabs', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })
      .state('tabs.menu', {
        url: "/menu",
        views: {
          'menu-tab': {
            templateUrl: "templates/menu.html",
          }
        }
      })
      .state('tabs.groceries', {
        url: "/groceries",
        views: {
          'groceries-tab': {
            templateUrl: "templates/groceries.html",
          }
        }
      })
      .state('tabs.settings', {
        url: "/settings",
        views: {
          'settings-tab': {
            templateUrl: "templates/settings.html",
          }
        }
      })
    $urlRouterProvider.otherwise("/tab/menu");
  }
]);