var app = angular.module('parseQ');

app.service('MainService', function($http) {

	this.postData = function(question) {
		return $http({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/questions',
			data: question
		})
	};

	this.getData = function() {
		return $http({
			method: 'GET',
			url: '/1/classes/questions/objectID'
		})
	};

});