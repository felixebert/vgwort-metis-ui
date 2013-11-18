(function(angular, mui) {
	'use strict';
	var statsModule = angular.module('stats', []);

	mui.stats = {
		get: function($http, $scope) {
			$http({
				method: 'GET',
				url: mui.url('/pixelStatistic')
			}).success(function(data) {
				$scope.stats = data;
			});
		}
	};

	statsModule.controller('StatsCtrl', function($scope, $http) {
		mui.stats.get($http, $scope);
	});
})(angular, mui);