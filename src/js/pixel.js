(function(angular, mui) {
	'use strict';
	var pixelModule = angular.module('pixel', []);

	mui.pixel = {
		get: function(pixelId) {
			return {};
		}
	};

	pixelModule.controller('PixelCtrl', function($scope, $http, $routeParams) {
		$scope.pixel = mui.pixel.get($routeParams.pixelPublicId);
	});
})(angular, mui);