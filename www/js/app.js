'use strict';

var app = angular.module('starter', [
  'ionic',
  'WOYControllers',
  'WOYServices',
  'LocalStorageService',
  'WOYDirectives'
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
      .state('pages', {
        url: "/pages",
        abstract: true,
        templateUrl: "templates/left-sidebar.html"
      })
      .state('pages.meals', {
        url: "/meals",
        views: {
          'pages': {
            templateUrl: "templates/meals.html",
          }
        }
      })
      .state('pages.groceries', {
        url: "/groceries",
        views: {
          'pages': {
            templateUrl: "templates/groceries.html",
          }
        }
      })
    $urlRouterProvider.otherwise("/pages/meals");
  }
]);