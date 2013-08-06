(function(mui) {
	'use strict';

	var isLive = function() {
		return window.location.host.indexOf('localhost') < 0;
	};

	mui.url = function(path) {
		if (isLive()) {
			return path;
		} else {
			return 'http://localhost:8080/metis-admin' + path;
		}
	};
})(mui);