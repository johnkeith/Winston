'use strict';

var services = angular.module('WOYServices', []);

services.factory('GroceriesService', ['LocalStorage', function(LocalStorage){
	var groceriesService = {};
	var currentGroceriesList = [];

	var saveCurrentGroceriesList = function(){
		LocalStorage.setObject('currentGroceries', currentGroceriesList);
	}

	var emptyGroceriesList = function(){
		currentGroceriesList = [];
	}

	groceriesService.getCurrentGroceriesList = function(){
		return currentGroceriesList;
	}

	groceriesService.addIngredientsToGroceriesList = function(ingredients){
		ingredients.forEach(function(el, idx, arr){
			currentGroceriesList.push({ checked: false, item: el });
		});

		saveCurrentGroceriesList();
	}

	groceriesService.changeCheckedStatus = function(item, index){
		item.checked = !item.checked;
		
		currentGroceriesList.splice(index, 1, item);

		saveCurrentGroceriesList();
	}

	groceriesService.emptyGroceriesList = function(){
		emptyGroceriesList();
	}

	groceriesService.moveInGroceriesList = function(item, fromIndex, toIndex){
		currentGroceriesList.splice((fromIndex - 1), 1);
    currentGroceriesList.splice((toIndex - 1), 0, item);

    saveCurrentGroceriesList();
	}

	groceriesService.removeIngredientsFromGroceryList = function(ingredients){
		ingredients.forEach(function(el){
			var removed = false;

			currentGroceriesList.forEach(function(item, idx, arr){
				if(item.item == el && removed == false){
					currentGroceriesList.splice(idx, 1);
					removed = true;
				}
			});
		});
	}

	function activate(){
		var stored = LocalStorage.getObject('currentGroceries');
		if(stored.length > 0){
			currentGroceriesList = stored;
		}
	}

	activate();

	return groceriesService;
}]);

services.factory('RecipesService', ['$http', 'LocalStorage', 'RecipeData', 'GroceriesService',
	function($http, LocalStorage, RecipeData, GroceriesService){
		var allRecipes = RecipeData.getAll();
		var recipesService = {};
		var currentRecipes = [];
		var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
			'Friday', 'Saturday']
		var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June',
			'July', 'August', 'September', 'October', 'Novemeber', 'December']
		
		var getRandomRecipe = function(excludedIndexes){
			var recipe, index;
			
			if(excludedIndexes == undefined){
				excludedIndexes = [];
			}
			
			while(recipe == undefined){
				var newIndex = Math.floor(Math.random() * allRecipes.length);
				if(excludedIndexes.indexOf(index) == -1){
					recipe = allRecipes[newIndex];
					index = newIndex;
				}
			}
			
			return { index: index, recipe: recipe };
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

		var updateGroceryList = function(){
			var ingredients = getIngredientsFromRecipes();

			GroceriesService.emptyGroceriesList();
			GroceriesService.addIngredientsToGroceriesList(ingredients);
		}

		var getIngredientsFromRecipes = function(){
			var ingredients = [];

			currentRecipes.forEach(function(recipeObj){
				recipeObj.recipe.ingredients.forEach(function(elIng){
					ingredients.push(elIng);
				});
			});

			return ingredients;
		}

		recipesService.fillWithRandomRecipes = function(numberOfRecipes){
			currentRecipes = [];
			var exclusionList = [];

			if(typeof(numberOfRecipes) != 'number'){
				numberOfRecipes = 7;
			}

			for(var i = 0; i < numberOfRecipes; i++){
				var ds = constructDateForRecipe(i);
				var randomRecipe = getRandomRecipe(exclusionList);

				exclusionList.push(randomRecipe.index);
				currentRecipes.push({ date: ds, recipe: randomRecipe.recipe});
			}

			saveCurrentRecipes();
			updateGroceryList();
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
			var ingredients = currentRecipes[index].recipe.ingredients;
			currentRecipes[index].recipe = { "recipeTitle": "None..." };

			saveCurrentRecipes();
			GroceriesService.removeIngredientsFromGroceryList(ingredients);
		}

		recipesService.refreshRecipeAtIndex = function(index){
			currentRecipes[index].recipe = getRandomRecipe().recipe;
			var ingredients = currentRecipes[index].recipe.ingredients;

			saveCurrentRecipes();
			GroceriesService.addIngredientsToGroceriesList(ingredients);
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

		// var allRecipes = [
		// 	{
		// 		"recipeTitle": "Golden Bowl",
		// 		"sourceName": "The Grit",
		// 		"sourceHref": "http://www.thegrit.com",
		// 		"cuisineType": "vegetarian",
		// 		"ingredients": []
		// 	},
		// ]

		return recipesService;
	}
]);