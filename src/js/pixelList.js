(function(angular, mui) {
	'use strict';
	var pixelListModule = angular.module('pixelList', []);

	mui.statistics = {
		get: function($http, $scope) {
			var onSuccess = function(data) {
				$scope.stats = data;
			};

			$http({
				method: 'GET',
				url: mui.url('/pixelStatistic')
			}).success(onSuccess);
		}
	};

	mui.pixelList = {
		get: function($http, $scope) {
			var onSuccess = function(data) {
				$scope.pixelLinks = data;
			};

			$http({
				method: 'GET',
				url: mui.url('/pixelLinks')
			}).success(onSuccess);
		}
	};

	pixelListModule.controller('PixelListCtrl', function($scope, $http) {
		$scope.pixelLinks = [];
		$scope.stats = {};

		mui.pixelList.get($http, $scope);
		mui.statistics.get($http, $scope);
	});
})(angular, mui);