'use strict';

var services = angular.module('WOYServices', []);

services.factory('RecipesService', ['$http', 'LocalStorage', function($http, LocalStorage){
	var recipesService = {};
	var currentRecipes = [];
	var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
		'Friday', 'Saturday']
	var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'Novemeber', 'December']
	
	var getRandomRecipe = function(){
		return allRecipes[Math.floor(Math.random() * allRecipes.length)];
	}

	var saveCurrentRecipes = function(){
		LocalStorage.setObject('currentRecipes', currentRecipes);
	}

	var constructDateForRecipe = function(i){
		var d = new Date();
		d.setDate(d.getDate() + i);

		return daysOfWeek[d.getDay()] + ' - ' + monthsOfYear[d.getMonth()] + ' ' + 
			d.getUTCDate() + ', ' + (d.getYear() + 1900);
	}

	recipesService.fillWithRandomRecipes = function(numberOfRecipes){
		currentRecipes = [];

		if(typeof(numberOfRecipes) != 'number'){
			numberOfRecipes = 7;
		}

		for(var i = 0; i < numberOfRecipes; i++){
			var ds = constructDateForRecipe(i);

			currentRecipes.push({ date: ds, recipe: getRandomRecipe()});
		}

		saveCurrentRecipes();
	}

	recipesService.changeRecipeLocation = function(direction, index){
		if(direction == "up"){
			var targetIndex = index - 1
		} else if(direction == "down"){
			var targetIndex = index + 1
		}

		var target = currentRecipes[targetIndex].recipe;
		var toMove = currentRecipes[index].recipe

		currentRecipes[targetIndex].recipe = toMove;
		currentRecipes[index].recipe = target;

    saveCurrentRecipes();
	}

	recipesService.removeFromCurrentRecipes = function(index){
		currentRecipes[index].recipe = { "recipeTitle": "None..." };

		saveCurrentRecipes();
	}

	recipesService.refreshRecipeAtIndex = function(index){
		currentRecipes[index].recipe = getRandomRecipe();

		saveCurrentRecipes();
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
			"sourceHref": "http://www.thegrit.com",
			"cuisineType": "vegetarian",
			"ingredients": []
		},
		{
			"recipeTitle": "Coconut Shrimp Curry",
			"sourceName": "Gusto Required",
			"sourceHref": "http://www.gustorequired.com",
			"cuisineType": "pescatarian",
			"ingredients": []
		},
		{
			"recipeTitle": "Big Juicy Steak",
			"sourceName": "Sassy Kitchen",
			"sourceHref": "http://www.sassysatthegrill.com",
			"cuisineType": "omnivore",
			"ingredients": []
		},
		{
			"recipeTitle": "Chicago-style Pizza",
			"sourceName": "John\"s Brain",
			"sourceHref": "http://www.johnkeith.us",
			"cuisineType": "vegetarian",
			"ingredients": []
		},
		{
			"recipeTitle": "Red Beans and Rice",
			"sourceName": "Gusto Required",
			"sourceHref": "http://www.gustorequired.com",
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