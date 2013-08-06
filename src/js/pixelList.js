(function(angular, mui) {
	'use strict';
	var pixelListModule = angular.module('pixelList', []);

	mui.pixelList = {
		get: function($http, $scope) {
			var onSuccess = function(data) {
				$scope.drivers = data;
			};

			$http({
				method: 'GET',
				url: mui.url('/pixelLinks')
			}).success(onSuccess);
		}
	};

	pixelListModule.controller('PixelListCtrl', function($scope, $http) {
		$scope.pixels = [];

		mui.pixelList.get($http, $scope);
	});
})(angular, mui);