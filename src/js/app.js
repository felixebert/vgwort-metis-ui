var mui = {};

(function(mui) {
	'use strict';

	var appModule = angular.module('mui', ['textList', 'pixel', 'stats', 'navbar']);

	appModule.config(function($routeProvider) {
		$routeProvider.when('/textList', {
			templateUrl: 'partials/textList.html',
			controller: 'TextListCtrl'
		});
		$routeProvider.when('/stats', {
			templateUrl: 'partials/stats.html',
			controller: 'StatsCtrl'
		});
		$routeProvider.when('/pixel/:pixelPublicId', {
			templateUrl: 'partials/pixel.html',
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
