(function(angular, mui) {
	'use strict';
	var authorListModule = angular.module('authorList', []);

	mui.authorList = {
		get: function($http, $scope) {
			$http({
				method: 'GET',
				url: mui.url('/authorList')
			}).success(function(data) {
				$scope.authors = data;
			});
		},
		getUnknown: function($http, $scope) {
			$http({
				method: 'GET',
				url: mui.url('/unknownAuthors')
			}).success(function(data) {
				$scope.unknownAuthors = data;
			});
		}
	};

	authorListModule.controller('AuthorListCtrl', function($scope, $http) {
		mui.authorList.get($http, $scope);
		mui.authorList.getUnknown($http, $scope);
	});
})(angular, mui);