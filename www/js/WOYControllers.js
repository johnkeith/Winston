'use strict';

var controllers = angular.module('WOYControllers', []);

controllers.controller('StartController', ['$scope', 'RecipesService', '$ionicListDelegate',
	function($scope, RecipesService, $ionicListDelegate){
		$scope.showReorder = false;
		$scope.listCanSwipe = true;
		$scope.recipes = RecipesService.getCurrentRecipes;

		if(RecipesService.getCurrentRecipes().length == 0){
			RecipesService.fillWithRandomRecipes();
		}
		
		$scope.toggleReorder = function(){
			$scope.showReorder = !$scope.showReorder;
		}
		
		$scope.moveRecipe = function(recipe, fromIndex, toIndex) {
	    RecipesService.changeCurrentRecipesOrder(recipe, fromIndex, toIndex);
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
