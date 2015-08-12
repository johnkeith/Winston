'use strict';

var controllers = angular.module('WOYControllers', []);

controllers.controller('StartController', ['$scope', 'RecipesService',
	function($scope, RecipesService){
		$scope.funTest = 'Hi!';
		$scope.recipes = RecipesService.getRandomRecipes();
	}]
);
