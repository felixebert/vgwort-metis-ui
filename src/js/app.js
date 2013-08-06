var mui = {};

(function(mui) {
	'use strict';

	var appModule = angular.module('mui', ['pixelList']);

	appModule.config(function($routeProvider) {
		$routeProvider.when('/pixelList', {
			templateUrl: 'partials/pixelList.html',
			controller: 'PixelListCtrl'
		});
		$routeProvider.otherwise({
			redirectTo: '/pixelList'
		});
	});
})(mui);
