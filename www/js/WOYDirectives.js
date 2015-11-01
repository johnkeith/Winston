'use strict';

var directives = angular.module('WOYDirectives', []);

directives.directive('hasListWithScroll', [function(){
	return {
		restrict: 'A',
		link: function($scope){
			$scope.scrollLimit = 20;
			$scope.increaseScrollLimit = function(amount){
				if(amount == undefined){
					amount = 20;
				} 
				
				$scope.scrollLimit += amount;
		    $scope.$broadcast('scroll.infiniteScrollComplete');
			}
		}
	}
}]);

directives.directive('openInSafari', [function(){
	return {
		restrict: "A",
		link: function($scope){
			$scope.openInSafari = function(href){
				window.open(href, '_system');
			}
		}
	}
}]);

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
			"totalRecipes": "=",
			"shareSocially": "="
		},
		templateUrl: 'templates/ion-item-with-divider.html',
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
