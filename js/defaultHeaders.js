var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
	return {
		request: function (config) {
			config.headers = {'X-Parse-Application-Id': 'KQ3SjYae2eZAXA10ve9LoGvbeAMEb0nFkcB0tRkc', 'X-Parse-REST-API-Key': 'fiIRpds4mQqluY1DyyyEUrwRvHzmZB8j2IZDcCSI'};
			return config;
		}
	};
});