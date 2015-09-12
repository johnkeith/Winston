'use strict';

var controllers = angular.module('WOYControllers', []);

controllers.controller('HelpController', ['$scope', function($scope){
	$scope.helpInfo = [
		{
			title: 'How Can Winston Help Me?',
			body: [
				'Use Winston to create a meal plan automatically, along with a grocery list, with dinners for each night of the week.',
				'Meal planning is one of the best way to eat healthy and to save money!'
			]
		},
		{ 
			title: 'How Do I Get a New Weekly Meal Plan or Swap Recipes?',
			body: [
				'To get a new set of recipes, pull down on the Meals page and the list will fully refresh.',
				'If you want to refresh only a single recipe, swipe that recipe, then press the yellow refresh button.'
			]
		},
		{ 
			title: 'How Do I Change the Types of Recipes Winston Finds for My Meal Plans?',
			body: [
				'Use the switches in the sidebar menu to toggle different types of recipes.'
			]
		},
		{
			title: 'How Can I See My Previous Meal Plans?',
			body: [
				'Tap on history to see a list of your last 10 meal plans. Tap on one of those meal plans for those recipes to be shown again on the Meals screen.'
			]
		}
	];
}]);

controllers.controller('LeftSidebarController', ['$scope', 'GroceriesService', 'RecipesService',
	function($scope, GroceriesService, RecipesService){
		$scope.getShowCompletedItems = GroceriesService.getShowCompletedItems;
		$scope.toggleShowCompletedItems = GroceriesService.toggleShowCompletedItems;
		$scope.recipeFilters = RecipesService.getRecipeFilterSettings;
		$scope.toggleRecipeFilters = RecipesService.toggleRecipeFilter;
	}
]);

controllers.controller('PreviousMealsController', ['$scope', 'RecipesService', '$state', '$ionicHistory',
	function($scope, RecipesService, $state, $ionicHistory){
		$scope.historicalRecipes = RecipesService.getHistoricalRecipes;
		$scope.switchToPrevious = function(index){
			RecipesService.switchToPreviousMealPlan(index);
			$ionicHistory.nextViewOptions({
			  disableBack: true
			});
			$state.go("pages.meals");
		}
	}
]);

controllers.controller('GroceriesController', ['$scope', 'GroceriesService',
	function($scope, GroceriesService){
		$scope.showReorder = false;
		$scope.groceries = GroceriesService.getCurrentGroceriesList;
		$scope.changeCheckedStatus = function(item, index){
			GroceriesService.changeCheckedStatus(item, index)
		}
		$scope.toggleReorder = function(){
			$scope.showReorder = !$scope.showReorder;
		}
		$scope.reorderItem = function(item, fromIndex, toIndex){
			GroceriesService.moveInGroceriesList(item, fromIndex, toIndex);
		}
		$scope.getShowCompletedItems = GroceriesService.getShowCompletedItems;
	}
]);

controllers.controller('StartController', ['$scope', 'RecipesService', '$ionicListDelegate',
	function($scope, RecipesService, $ionicListDelegate){
		$scope.listCanSwipe = true;
		$scope.recipes = RecipesService.getCurrentRecipes;

		if(RecipesService.getCurrentRecipes().length == 0){
			RecipesService.fillWithRandomRecipes();
		}
		
		$scope.toggleReorder = function(){
			$scope.showReorder = !$scope.showReorder;
		}
		
		$scope.moveRecipe = function(direction, index) {
	    RecipesService.changeRecipeLocation(direction, index);
	  	$ionicListDelegate.closeOptionButtons();
	  };

	  $scope.removeRecipe = function(index){
	  	RecipesService.removeFromCurrentRecipes(index);
	  	$ionicListDelegate.closeOptionButtons();
	  }

	  $scope.refreshRecipe = function(index){
	  	RecipesService.refreshRecipeAtIndex(index);
	  	$ionicListDelegate.closeOptionButtons();
	  }

		$scope.getAllNewRecipes = function(){
			RecipesService.fillWithRandomRecipes();
			$scope.$broadcast('scroll.refreshComplete');
		}
	}]
);
