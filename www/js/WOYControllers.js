'use strict';

var controllers = angular.module('WOYControllers', []);

controllers.controller('SearchController', ['$scope', 'RecipesService', '$ionicActionSheet', '$ionicHistory', '$state',
	function($scope, RecipesService, $ionicActionSheet, $ionicHistory, $state){
		var actionSheet;
		$scope.allRecipes = RecipesService.getAllRecipes;

		$scope.scheduleRecipe = function(selectedRecipe){
			var dateOptions = RecipesService.getCurrentRecipes().map(function(obj){
				return { 'text': obj.date }
			});

			actionSheet = $ionicActionSheet.show({
				titleText: 'Select day to use recipe...',
				buttons: dateOptions,
				cancelText: 'Cancel',
				cancel: function(){
					actionSheet();
				},
				buttonClicked: function(index){
					RecipesService.replaceRecipeAtIndex(index, selectedRecipe);
					$ionicHistory.nextViewOptions({
					  disableBack: true
					});
					$state.go("pages.meals");
					return true;
				}
			});
		}
	}
]);

controllers.controller('ReplaceFromSearchController', ['$scope', '$stateParams', '$state', 'RecipesService', '$ionicHistory',
	function($scope, $stateParams, $state, RecipesService, $ionicHistory){
		$scope.recipeDate = $stateParams.recipeDate;
		$scope.recipeTitle = $stateParams.recipeTitle;
		$scope.recipeIndex = $stateParams.recipeIndex;

		$scope.allRecipes = RecipesService.getAllRecipes;

		$scope.selectRecipe = function(selectedRecipe){
			RecipesService.replaceRecipeAtIndex($scope.recipeIndex, selectedRecipe);
			$ionicHistory.goBack();
		}
	}
]);

// this controller wraps the body. Parent to all other controllers
controllers.controller('MainController', ['$scope', 'LocalStorage', '$ionicModal',
	function($scope, LocalStorage, $ionicModal){
		$ionicModal.fromTemplateUrl('templates/first-time-tutorial-modal.html', {
	    scope: $scope,
	    animation: 'slide-in-up'
	  }).then(function(modal) {
	    $scope.modal = modal;
	    // opens the modal only one time
		  if(!localStorage.getItem("tutorialShown")){
		    $scope.modal.show();
		  }	else {
		  	$scope.modal.remove();
		  }
	  });
	  $scope.openModal = function() {
	    $scope.modal.show();
	  };
	  $scope.closeModal = function() {
	    $scope.modal.hide();
	   	localStorage.setItem("tutorialShown", true);
	  };
	  //Cleanup the modal when we're done with it!
	  $scope.$on('$destroy', function() {
	    $scope.modal.remove();
	  });
	}
]);

controllers.controller('HelpController', ['$scope', function($scope){
	$scope.helpInfo = [
		{
			title: 'What does Winston do? Can it change my life?',
			body: [
				'Winston creates meal plans automatically with dinners for each night of the week, along with grocery lists of all the ingredients you need to make these recipes.',
				'That means, no more time spent planning what to eat!'
			]
		},
		{
			title: 'Why should I meal plan?',
			body: [
				'Meal planning is one of the best ways to eat healthy and to save money!',
				'By having a plan of the recipes you will cook and the ingredients you need, you will be less inclined to purchase unhealthy or unneeded food at the grocery.'
			]
		},
		{ 
			title: 'How do I get a new meal plan for the week?',
			body: [
				'To get a new set of recipes, pull down on the Meals page and the list will fully refresh.',
			]
		},
		{
			title: 'How do I change a single recipe in my current meal plan?',
			body: [
				'If you want to refresh only a single recipe, swipe that recipe to the left, then press the yellow refresh button.'
			]
		},
		{ 
			title: 'How do I change the types of recipes Winston uses for my meal plans?',
			body: [
				'Use the switches in the sidebar menu to toggle different types of recipes.'
			]
		},
		{
			title: 'How can I see my previous meal plans?',
			body: [
				'Tap on History to see a list of your last 10 meal plans. Tap on one of those meal plans for those recipes to be shown again on the Meals screen.'
			]
		}
	];
}]);

controllers.controller('LeftSidebarController', ['$scope', 'GroceriesService', 'RecipesService',
	function($scope, GroceriesService, RecipesService){
		$scope.getShowCompletedItems = GroceriesService.getShowCompletedItems;
		$scope.toggleShowCompletedItems = GroceriesService.toggleShowCompletedItems;
		$scope.recipeFilters = RecipesService.getRecipeFilterSettings;
		$scope.toggleRecipeFilters = RecipesService.toggleRecipeFilter;
	}
]);

controllers.controller('PreviousMealsController', ['$scope', 'RecipesService', '$state', '$ionicHistory',
	function($scope, RecipesService, $state, $ionicHistory){
		$scope.historicalRecipes = RecipesService.getHistoricalRecipes;
		$scope.emptyHistoricalRecipes = RecipesService.emptyHistoricalRecipes;

		$scope.switchToPrevious = function(index){
			RecipesService.switchToPreviousMealPlan(index);
			$ionicHistory.nextViewOptions({
			  disableBack: true
			});
			$state.go("pages.meals");
		}
	}
]);

controllers.controller('GroceriesController', ['$scope', 'GroceriesService', '$ionicListDelegate', '$ionicScrollDelegate',
	function($scope, GroceriesService, $ionicListDelegate, $ionicScrollDelegate){
		$scope.showReorder = false;
		$scope.groceries = GroceriesService.getCurrentGroceriesList;
		$scope.itemInput = { item: undefined };

		$scope.groceriesInfinite = GroceriesService.getGroceriesInfiniteScroll;
		$scope.moreGroceries = function(){
			GroceriesService.addMoreGroceries();
	    $scope.$broadcast('scroll.infiniteScrollComplete');
		}

		$scope.$on('$stateChangeSuccess', function() {
			$ionicScrollDelegate.$getByHandle('groceriesList').scrollTop(true);
	    GroceriesService.setInfiniteScrollAmount(20);
	  });

		$scope.scrollToTop = function(){
			// doesn't perform great - maybe do bottom. maybe do input in the list?
			$ionicScrollDelegate.$getByHandle('groceriesList').scrollTop(true);
		}

		$scope.scrollToBottom = function(){
			$ionicScrollDelegate.$getByHandle('groceriesList').scrollBottom(true);
		}

		$scope.addItemToGroceriesList = function(){
			if($scope.itemInput.item != '' && $scope.itemInput.item != undefined){
				GroceriesService.addItemToGroceriesList($scope.itemInput.item);

				$scope.itemInput.item = undefined;
				$scope.scrollToTop();
			}
		}

		$scope.removeItem = function(item){
			GroceriesService.removeItemFromGroceriesList(item);
			
			$ionicListDelegate.closeOptionButtons();
		}

		$scope.changeCheckedStatus = function(item, index){
			GroceriesService.changeCheckedStatus(item, index)
		}
		$scope.toggleReorder = function(){
			$scope.showReorder = !$scope.showReorder;
		}
		$scope.hideReorder = function(){
			$scope.showReorder = false;
		}
		$scope.reorderItem = function(item, fromIndex, toIndex){
			GroceriesService.moveInGroceriesList(item, fromIndex, toIndex);
		}
		$scope.getShowCompletedItems = GroceriesService.getShowCompletedItems;
	}
]);

controllers.controller('StartController', ['$rootScope', '$scope', 'LocalStorage', 'RecipesService', '$ionicListDelegate', '$timeout', '$ionicModal',
	function($rootScope, $scope, LocalStorage, RecipesService, $ionicListDelegate, $timeout, $ionicModal){
		$scope.listCanSwipe = true;
		$scope.recipes = RecipesService.getCurrentRecipes;

		if(RecipesService.getCurrentRecipes().length == 0){
			RecipesService.fillWithRandomRecipes();
		}

		$scope.shareSocially = function(title, href){
			var subject = "Recipe for " + title;
			var message = "Recipe for " + title + " - " + href + ". Found with Winston: http://appstore.com/winstonweeklymealplans";
			window.plugins.socialsharing.share(
	      message,
	      subject, // this is for subject
	      null, // this is for a file
	     	null // this is for a href
	    );
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

	  $rootScope.$on('$stateChangeStart', function(){
	  	$ionicListDelegate.closeOptionButtons();
	  });

		$scope.getAllNewRecipes = function(){
			RecipesService.fillWithRandomRecipes();
			$scope.$broadcast('scroll.refreshComplete');
			$ionicListDelegate.closeOptionButtons();
		}	
	}]
);
