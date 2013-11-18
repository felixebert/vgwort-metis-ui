(function(angular, mui) {
	'use strict';
	var textModule = angular.module('text', []);

	mui.text = {
		get: function(textId) {
			return {};
		}
	};

	textModule.controller('TextCtrl', function($scope, $http, $routeParams) {
		$scope.text = mui.text.get($routeParams.id);
	});
})(angular, mui);