'use strict';

var controllers = angular.module('WOYControllers', []);

controllers.controller('StartController', ['$scope',
	function($scope){
		$scope.funTest = 'Hi!';
	}]
);
