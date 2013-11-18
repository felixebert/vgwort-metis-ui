(function(angular, mui) {
	'use strict';
	var textModule = angular.module('text', []);

	mui.text = {
		get: function($http, $scope, id) {
			$http({
				method: 'GET',
				url: mui.url('/text/' + id)
			}).success(function(data) {
				$scope.text = data;
			});

			$http({
				method: 'GET',
				url: mui.url('/textUrls/' + id)
			}).success(function(data) {
				$scope.urls = data;
			});

			$http({
				method: 'GET',
				url: mui.url('/grab/' + id)
			}).success(function(data) {
				$scope.grabbedData = data;
			});
		},
	};

	textModule.controller('TextCtrl', function($scope, $http, $routeParams) {
		mui.text.get($http, $scope, $routeParams.id);
	});
})(angular, mui);