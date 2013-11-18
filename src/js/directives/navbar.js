var navbarModule = angular.module('navbar', []);

navbarModule.directive('navbar', function($location) {
	'use strict';

	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs, controller) {
			scope.$watch(function() {
				return $location.path();
			}, function(newValue, oldValue) {
				scope.path = $location.path();
			});
		}
	};
});