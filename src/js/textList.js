(function(angular, mui) {
	'use strict';
	var textListModule = angular.module('textList', []);

	mui.textList = {
		get: function($http, $scope) {
			$http({
				method: 'GET',
				url: mui.url('/textList')
			}).success(function(data) {
				$scope.texts = data;
			});
		}
	};

	textListModule.controller('TextListCtrl', function($scope, $http) {
		mui.textList.get($http, $scope);
	});
})(angular, mui);