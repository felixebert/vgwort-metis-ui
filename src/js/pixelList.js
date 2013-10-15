(function(angular, mui) {
	'use strict';
	var pixelListModule = angular.module('pixelList', []);

	mui.statistics = {
		get: function($http, $scope) {
			$http({
				method: 'GET',
				url: mui.url('/pixelStatistic')
			}).success(function(data) {
				$scope.stats = data;
			});
		}
	};

	mui.pixelList = {
		get: function($http, $scope) {
			$http({
				method: 'GET',
				url: mui.url('/pixelLinks')
			}).success(function(data) {
				$scope.pixelLinks = data;
			});
		}
	};

	pixelListModule.controller('PixelListCtrl', function($scope, $http) {
		$scope.pixelLinks = [];
		$scope.stats = {};

		mui.pixelList.get($http, $scope);
		mui.statistics.get($http, $scope);
	});
})(angular, mui);