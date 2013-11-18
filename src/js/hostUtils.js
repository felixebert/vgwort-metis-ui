(function(mui) {
	'use strict';

	var isLive = function() {
		return window.location.host.indexOf('localhost') < 0;
	};

	mui.url = function(path) {
		var url = '/metis-api' + path;
		if (!isLive()) {
			url = 'http://localhost:8080' + url;
		}
		return url;
	};
})(mui);