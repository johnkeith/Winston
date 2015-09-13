'use strict';

var directives = angular.module('WOYDirectives', []);

directives.directive('submitOnEnter', [function(){
	return {
		scope: {
			"submitFunction": "="
		},
		link: function($scope, element, $attrs){
			element.bind('keydown keypress', function(event){
				if(event.which == 13){
					$scope.$apply(function(){
						$scope.submitFunction();
					});
					event.preventDefault();
				}
			});
		}
	}
}]);

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
