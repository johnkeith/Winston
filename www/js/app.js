'use strict';

var app = angular.module('starter', [
  'ionic',
  'WOYControllers',
  'WOYServices',
  'LocalStorageService',
  'WOYDirectives',
  'WOYData'
])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
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
      .state('pages.previousMeals', {
        url: "/previous-meals",
        views: {
          'pages': {
            templateUrl: "templates/previous_meals.html",
          }
        }
      })
      .state('pages.help', {
        url: '/help',
        views: {
          'pages': {
            templateUrl: 'templates/help.html'
          }
        }
      })
      .state('pages.replaceFromSearch', {
        url: '/replace-from-search?recipeTitle&recipeDate&recipeIndex',
        views: {
          'pages': {
            templateUrl: 'templates/replace_from_search.html'
          }
        }
      })
      .state('pages.search', {
        url: '/search',
        views: {
          'pages': {
            templateUrl: 'templates/search_recipes.html'
          }
        }
      });
    $urlRouterProvider.otherwise("/pages/meals");
  }
]);