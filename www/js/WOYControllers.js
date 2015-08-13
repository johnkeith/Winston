'use strict';

var controllers = angular.module('WOYControllers', []);

controllers.controller('StartController', ['$scope', 'RecipesService',
	function($scope, RecipesService){
		$scope.showReorder = true;
		
		$scope.moveRecipe = function(recipe, fromIndex, toIndex) {
	    $scope.recipes.splice(fromIndex, 1);
	    $scope.recipes.splice(toIndex, 0, recipe);
	  };
		
		$scope.recipes = RecipesService.getCurrentRecipes();

		if(RecipesService.getCurrentRecipes().length == 0){
			RecipesService.fillWithRandomRecipes();
		}
	}]
);
