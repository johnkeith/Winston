'use strict';

var services = angular.module('WOYServices', []);

services.factory('RecipesService', ['$http', 'LocalStorage', function($http, LocalStorage){
	var recipesService = {};
	var currentRecipes = [];
	
	var getRandomRecipe = function(){
		return allRecipes[Math.floor(Math.random() * allRecipes.length)];
	}

	recipesService.fillWithRandomRecipes = function(numberOfRecipes){
		currentRecipes = [];

		if(typeof(numberOfRecipes) != 'number'){
			numberOfRecipes = 7;
		}

		for(var i = 1; i <= numberOfRecipes; i++){
			currentRecipes.push(getRandomRecipe());
		}

		LocalStorage.setObject('currentRecipes', currentRecipes);
	}

	recipesService.changeCurrentRecipesOrder = function(recipe, fromIndex, toIndex){
		currentRecipes.splice(fromIndex, 1);
    currentRecipes.splice(toIndex, 0, recipe);

    LocalStorage.setObject('currentRecipes', currentRecipes);
	}

	recipesService.getCurrentRecipes = function(){
		return currentRecipes;
	}

	function activate(){
		var stored = LocalStorage.getObject('currentRecipes');
		if(stored.length > 0){
			currentRecipes = stored;
		}
	}

	activate();

	var allRecipes = [
		{
			"recipeTitle": "Golden Bowl",
			"sourceName": "The Grit",
			"sourceHref": "www.thegrit.com",
			"cuisineType": "vegetarian",
			"ingredients": []
		},
		{
			"recipeTitle": "Coconut Shrimp Curry",
			"sourceName": "Gusto Required",
			"sourceHref": "www.gustorequired.com",
			"cuisineType": "pescatarian",
			"ingredients": []
		},
		{
			"recipeTitle": "Big Juicy Steak",
			"sourceName": "Sassy Kitchen",
			"sourceHref": "www.sassysatthegrill.com",
			"cuisineType": "omnivore",
			"ingredients": []
		},
		{
			"recipeTitle": "Chicago-style Pizza",
			"sourceName": "John\"s Brain",
			"sourceHref": "www.johnkeith.us",
			"cuisineType": "vegetarian",
			"ingredients": []
		},
		{
			"recipeTitle": "Red Beans and Rice",
			"sourceName": "Gusto Required",
			"sourceHref": "www.gustorequired.com",
			"cuisineType": "vegetarian",
			"ingredients": []
		},
		{
			"recipeTitle": "Spicy Sweet Potato White Bean Burgers",
			"sourceName": "Gusto Required",
			"sourceHref": "http://gustorequired.com/2015/01/30/spicy-sweet-potato-white-bean-burgers/",
			"cuisineType": "vegetarian",
			"ingredients": []
		},
		{
			"recipeTitle": "Baked Pasta with Butternut Squash & Kale and other stuff",
			"sourceName": "Gusto Required",
			"sourceHref": "http://gustorequired.com/2014/11/24/baked-pasta-with-butternut-squash-kale/",
			"cuisineType": "vegetarian",
			"ingredients": []
		}
	];

	return recipesService;
}]);