var mui = {};

(function(mui) {
	'use strict';

	var appModule = angular.module('mui', ['pixelList', 'pixel']);

	appModule.config(function($routeProvider) {
		$routeProvider.when('/pixelList', {
			templateUrl: 'partials/pixelList.html',
			controller: 'PixelListCtrl'
		});
		$routeProvider.when('/pixel/:pixelPublicId', {
			templateUrl: 'partials/pixel.html',
			controller: 'PixelCtrl'
		});
		$routeProvider.otherwise({
			redirectTo: '/pixelList'
		});
	});
})(mui);
