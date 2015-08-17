'use strict';

var directives = angular.module('WOYDirectives', []);

directives.directive('ionItemWithDivider', [function(){
	return {
		restrict: 'E',
		scope: {
			"recipeInfo": "=",
			"recipeInfoIndex": "=",
			"removeRecipe": "=",
			"refreshRecipe": "=",
			"moveRecipe": "=",
			"totalRecipes": "="
		},
		templateUrl: 'templates/ion-item-with-divider.html'
	}
}]);
