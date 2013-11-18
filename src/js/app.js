var mui = {};

(function(mui) {
	'use strict';

	var appModule = angular.module('mui', ['textList', 'pixel', 'stats', 'authorList', 'author', 'navbar']);

	appModule.config(function($routeProvider) {
		$routeProvider.when('/textList', {
			templateUrl: '/partials/textList.html',
			controller: 'TextListCtrl'
		});
		$routeProvider.when('/authorList', {
			templateUrl: '/partials/authorList.html',
			controller: 'AuthorListCtrl'
		});
		$routeProvider.when('/author', {
			templateUrl: '/partials/author.html',
			controller: 'NewAuthorCtrl'
		});
		$routeProvider.when('/author/:id', {
			templateUrl: '/partials/author.html',
			controller: 'EditAuthorCtrl'
		});
		$routeProvider.when('/stats', {
			templateUrl: '/partials/stats.html',
			controller: 'StatsCtrl'
		});
		$routeProvider.when('/pixel/:pixelPublicId', {
			templateUrl: '/partials/pixel.html',
			controller: 'PixelCtrl'
		});
		$routeProvider.otherwise({
			redirectTo: '/textList'
		});
	});

	appModule.config(function($locationProvider) {
		$locationProvider.html5Mode(true);
	});
})(mui);
