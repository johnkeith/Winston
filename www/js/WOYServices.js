'use strict';

var services = angular.module('WOYServices', []);

services.factory('TutorialService', ['LocalStorage', function(LocalStorage){
	var tutService = {};
	var promptForFirstTimeTutorial = false;

	tutService.getTutorialPromptStatus = function(){
		return promptForFirstTimeTutorial;
	}

	tutService.saveTutorialPromptStatus = function(status){
		LocalStorage.set('firstTimeInApp', false);
	}

	function activate(){
		var promptForFirstTimeTutorial = LocalStorage.get('firstTimeInApp');
		console.log(promptForFirstTimeTutorial);
		if(promptForFirstTimeTutorial == undefined && promptForFirstTimeTutorial == null){
			promptForFirstTimeTutorial = true;
			console.log(promptForFirstTimeTutorial);
		}
	}

	activate();

	return tutService;
}]);

services.factory('GroceriesService', ['LocalStorage', function(LocalStorage){
	var groceriesService = {};
	var currentGroceriesList = [];
	var showCompletedItems = true;
	var infiniteScrollAmount = 20;

	var saveCurrentGroceriesList = function(){
		LocalStorage.setObject('currentGroceries', currentGroceriesList);
	}

	var emptyGroceriesList = function(){
		currentGroceriesList = [];
	}

	var storeCompletedItemsOption = function(){
		LocalStorage.setObject('showCompletedItems', showCompletedItems);
	}

	groceriesService.getInfiniteScrollAmount = function(){
		return infiniteScrollAmount;
	}

	groceriesService.setInfiniteScrollAmount = function(amount){
		infiniteScrollAmount = amount;
	}

	groceriesService.getGroceriesInfiniteScroll = function(){
		return currentGroceriesList.slice(0, infiniteScrollAmount)
	}

	groceriesService.addMoreGroceries = function(){
		if(infiniteScrollAmount == currentGroceriesList.length){
			return
		} else if(infiniteScrollAmount > currentGroceriesList.length){
			return
		} else if(infiniteScrollAmount + 20 > currentGroceriesList.length){
			infiniteScrollAmount = currentGroceriesList.length
		} else {
			infiniteScrollAmount += 20;
		}
	}

	groceriesService.removeItemFromGroceriesList = function(index){
		currentGroceriesList.splice(index, 1);

		saveCurrentGroceriesList();
	}

	groceriesService.getShowCompletedItems = function(){
		return showCompletedItems;
	}

	groceriesService.toggleShowCompletedItems = function(){
		showCompletedItems = !showCompletedItems;
		storeCompletedItemsOption();
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
		currentGroceriesList.splice(fromIndex, 1);
    currentGroceriesList.splice(toIndex, 0, item);

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

	groceriesService.addItemToGroceriesList = function(item){
		currentGroceriesList.unshift({ checked: false, item: item });

		saveCurrentGroceriesList();
	}

	function activate(){
		var storedGroceriesList = LocalStorage.getObject('currentGroceries');
		if(storedGroceriesList.length > 0){
			currentGroceriesList = storedGroceriesList;
		}

		var storedOptions = LocalStorage.getObject('showCompletedItems');
		if(storedOptions == true || storedOptions == false){
			showCompletedItems = storedOptions;
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
		var historicalRecipes = [];
		var maxHistoricalRecipes = 10;
		var recipeFilterSettings = { 'Beef': true, 'Pork': true, 'Chicken': true, 'Seafood': true, 'Vegan': true, 'Vegetarian': true, 'Gluten-free': true };

		var getRecipeCategories = function(){
			allRecipes.forEach(function(recipeObj){
				recipeObj.cuisineType.forEach(function(cat){
					console.log(cat);
				})
			});
		}

		var recipeNotExcludedByType = function(recipe){			
			var notExcluded = true;

			recipe.cuisineType.forEach(function(el){
				if(recipeFilterSettings[el] == false){
					notExcluded = false;
				}
			});

			return notExcluded;
		}

		var getRandomRecipe = function(excludedIndexes){
			if(allRecipeTypesAreFiltered() == false){
				var recipe, index;
				
				if(excludedIndexes == undefined){
					excludedIndexes = [];
				}
				
				while(recipe == undefined){
					var newIndex = Math.floor(Math.random() * allRecipes.length);


					if(excludedIndexes.indexOf(index) == -1){
						recipe = allRecipes[newIndex];
						
						if(recipeNotExcludedByType(recipe)){
							index = newIndex;
						} else {
							recipe = undefined;
						}
					}
				}

				return { index: index, recipe: recipe };

			} else {
				return null;
			}
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

		var getRecipeTitles = function(){
			var results = [];

			currentRecipes.forEach(function(el){
				results.push(el.recipe.recipeTitle);
			});

			return results;
		}

		var saveHistoricalRecipes = function(){
			LocalStorage.setObject('historicalRecipes', historicalRecipes);
		}

		var savePreviousRecipes = function(){
			if(historicalRecipes.length == maxHistoricalRecipes){
				historicalRecipes.splice(-1, 1);
			}
			historicalRecipes.unshift({ titles: getRecipeTitles(), mealPlan: currentRecipes });
			
			saveHistoricalRecipes();
		}

		var saveRecipeFilterSettings = function(){
			LocalStorage.setObject('recipeFilterSettings', recipeFilterSettings);
		}

		var allRecipeTypesAreFiltered = function(){
			var result = 0;

			for(var key in recipeFilterSettings){
				if(recipeFilterSettings[key] == false){
					result += 1
				}
			}

			if(result == Object.keys(recipeFilterSettings).length){
				return true;
			} else {
				return false;
			}
		}

		recipesService.getAllRecipes = function(){
			return allRecipes;
		}

		recipesService.emptyHistoricalRecipes = function(){
			historicalRecipes = [];

			saveHistoricalRecipes();
		}

		recipesService.getRecipeFilterSettings = function(){
			return recipeFilterSettings;
		}

		recipesService.toggleRecipeFilter = function(type){
			recipeFilterSettings[type] = !recipeFilterSettings[type];

			saveRecipeFilterSettings();
		}

		recipesService.switchToPreviousMealPlan = function(histIndex){
			var previousPlan = historicalRecipes[histIndex];
			historicalRecipes.splice(histIndex, 1);
			historicalRecipes.unshift({ titles: getRecipeTitles(), mealPlan: currentRecipes});

			currentRecipes = previousPlan.mealPlan;

			saveHistoricalRecipes();
			saveCurrentRecipes();
			updateGroceryList();
		}
		recipesService.getHistoricalRecipes = function(){
			return historicalRecipes;
		}

		recipesService.fillWithRandomRecipes = function(numberOfRecipes){
			savePreviousRecipes();
			currentRecipes = [];
			var exclusionList = [];

			if(typeof(numberOfRecipes) != 'number'){
				numberOfRecipes = 7;
			}

			for(var i = 0; i < numberOfRecipes; i++){
				var ds = constructDateForRecipe(i);
				var randomRecipe = getRandomRecipe(exclusionList);

				if(randomRecipe != null){
					exclusionList.push(randomRecipe.index);
					currentRecipes.push({ date: ds, recipe: randomRecipe.recipe});
				}
			}

			saveCurrentRecipes();
			updateGroceryList();

			console.log(currentRecipes);
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
			var randomRecipe = getRandomRecipe()
			
			if(randomRecipe != null){
				var previousIngredients = currentRecipes[index].recipe.ingredients;

				GroceriesService.removeIngredientsFromGroceryList(previousIngredients);

				currentRecipes[index].recipe = randomRecipe.recipe; 

				var ingredients = currentRecipes[index].recipe.ingredients;

				saveCurrentRecipes();
				GroceriesService.addIngredientsToGroceriesList(ingredients);
			}
		}

		recipesService.getCurrentRecipes = function(){
			return currentRecipes;
		}

		recipesService.replaceRecipeAtIndex = function(index, recipe){
			var previousIngredients = currentRecipes[index].recipe.ingredients;
			GroceriesService.removeIngredientsFromGroceryList(previousIngredients);

			currentRecipes[index].recipe = recipe;
			var ingredients = currentRecipes[index].recipe.ingredients;

			GroceriesService.addIngredientsToGroceriesList(ingredients);
			saveCurrentRecipes();
		}

		function activate(){
			var storedCurrentRecipes = LocalStorage.getObject('currentRecipes');
			var storedHistoricalRecipes = LocalStorage.getObject('historicalRecipes');
			var storedRecipeFilterSettings = LocalStorage.getObject('recipeFilterSettings');

			if(storedCurrentRecipes.length > 0){
				currentRecipes = storedCurrentRecipes;
			}

			if(storedHistoricalRecipes.length > 0){
				historicalRecipes = storedHistoricalRecipes;
			}

			if(storedRecipeFilterSettings['Beef'] != undefined){
				recipeFilterSettings = storedRecipeFilterSettings;
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