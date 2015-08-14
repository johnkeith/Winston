'use strict';

var controllers = angular.module('WOYControllers', []);

controllers.controller('StartController', ['$scope', 'RecipesService',
	function($scope, RecipesService){
		$scope.daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
		$scope.showReorder = false;
		$scope.listCanSwipe = true;
		
		$scope.toggleReorder = function(){
			$scope.showReorder = !$scope.showReorder;
		}
		
		$scope.moveRecipe = function(recipe, fromIndex, toIndex) {
	    RecipesService.changeCurrentRecipesOrder(recipe, fromIndex, toIndex);
	  };

		$scope.recipes = RecipesService.getCurrentRecipes;

		if(RecipesService.getCurrentRecipes().length == 0){
			RecipesService.fillWithRandomRecipes();
		}

		$scope.getAllNewRecipes = function(){
			RecipesService.fillWithRandomRecipes();
		}
	}]
);
