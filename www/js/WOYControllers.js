'use strict';

var controllers = angular.module('WOYControllers', []);

controllers.controller('PreviousMealsController', ['$scope', 'RecipesService',
	function($scope, RecipesService){
		$scope.historicalRecipes = RecipesService.getHistoricalRecipes;
	}
])

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
