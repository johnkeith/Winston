'use strict';

var directives = angular.module('WOYDirectives', []);

// directives.directive('shareSocially', [function(){
// 	return {
// 		restrict: "A",
// 		scope: {
// 			"shareMessage": "=",
// 			"shareSubject": "=",
// 			"shareHref": "="
// 		},
// 		link: function($scope, element, $attrs){
// 			$scope.share = function(){
// 				console.log('I am sharing');
// 				window.plugins.socialsharing.share(
// 		      $scope.shareMessage,
// 		      $scope.shareSubject,
// 		      null, // this is for a file
// 		      $scope.shareHref
// 			  );
// 			}
// 		}
// 	}
// }]);

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
		controller: function($scope){
			$scope.openInSafari = function(href){
				window.open(href, '_system');
			}
		}
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
