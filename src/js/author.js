(function(angular, mui) {
	'use strict';
	var authorModule = angular.module('author', []);

	mui.author = {
		get: function($http, $scope, id) {
			$http({
				method: 'GET',
				url: mui.url('/author/' + id)
			}).success(function(data) {
				$scope.author = data;
			});
		},
		post: function($http, author, onSuccess) {
			$http({
				method: 'POST',
				url: mui.url('/author'),
				data: $.param(author),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).success(onSuccess);
		},
		put: function($http, author, id, onSuccess) {
			$http({
				method: 'PUT',
				url: mui.url('/author/' + id),
				data: $.param(author),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).success(onSuccess);
		},
		remove: function($http, id, onSuccess) {
			$http({
				method: 'DELETE',
				url: mui.url('/author/' + id),
			}).success(onSuccess);
		}
	};

	authorModule.controller('NewAuthorCtrl', function($scope, $http, $location) {
		$scope.author = {};
		$scope.isNew = true;
		$scope.submit = function() {
			mui.author.post($http, $scope.author, function() {
				$location.path('/authorList');
			});
		};
	});

	authorModule.controller('EditAuthorCtrl', function($scope, $http, $routeParams, $location) {
		mui.author.get($http, $scope, $routeParams.id);
		$scope.submit = function() {
			mui.author.put($http, $scope.author, $routeParams.id, function() {
				$location.path('/authorList');
			});
		};
		$scope.remove = function() {
			mui.author.remove($http, $routeParams.id, function() {
				$location.path('/authorList');
			});
		};
	});
})(angular, mui);