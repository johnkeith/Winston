'use strict';

var services = angular.module('WOYServices', []);

services.factory('RecipesService', ['$http', function($http){
	var recipesService = {};
	var currentRecipes = [];
	
	var getRandomRecipe = function(){
		return allRecipes[Math.floor(Math.random() * allRecipes.length)];
	}

	recipesService.getRandomRecipes = function(numberOfRecipes){
		if(typeof(numberOfRecipes) != 'number'){
			numberOfRecipes = 7;
		}

		for(var i = 1; i <= numberOfRecipes; i++){
			currentRecipes.push(getRandomRecipe());
		}

		return currentRecipes;
	}

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
			"recipeTitle": "Baked Pasta with Butternut Squash & Kale",
			"sourceName": "Gusto Required",
			"sourceHref": "http://gustorequired.com/2014/11/24/baked-pasta-with-butternut-squash-kale/",
			"cuisineType": "vegetarian",
			"ingredients": []
		}
	];

	return recipesService;
}]);