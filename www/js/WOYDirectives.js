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

directives.directive('ionItemHelpCard', [function(){
	return {
		restrict: 'E',
		scope: {
			'title': '=',
			'body': '='
		},
		templateUrl: 'templates/ion-item-help-card.html'
	}
}]);
