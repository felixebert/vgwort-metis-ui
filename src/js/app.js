var mui = {};

(function(mui) {
	'use strict';

	var appModule = angular.module('mui', ['textList', 'text', 'stats', 'authorList', 'author', 'navbar']);

	appModule.config(function($routeProvider) {
		$routeProvider.when('/textList', {
			templateUrl: 'partials/textList.html',
			controller: 'TextListCtrl'
		});
		$routeProvider.when('/authorList', {
			templateUrl: 'partials/authorList.html',
			controller: 'AuthorListCtrl'
		});
		$routeProvider.when('/author', {
			templateUrl: 'partials/author.html',
			controller: 'NewAuthorCtrl'
		});
		$routeProvider.when('/author/:id', {
			templateUrl: 'partials/author.html',
			controller: 'EditAuthorCtrl'
		});
		$routeProvider.when('/stats', {
			templateUrl: 'partials/stats.html',
			controller: 'StatsCtrl'
		});
		$routeProvider.when('/text/:id', {
			templateUrl: 'partials/text.html',
			controller: 'TextCtrl'
		});
		$routeProvider.otherwise({
			redirectTo: 'textList'
		});
	});
})(mui);
