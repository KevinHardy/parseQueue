var app = angular.module('parseQ');

app.controller('MainController', function($scope, MainService) {
	//$scope.test = 'This is a test of my controller';

	$scope.postData = function() {
		MainService.postData({Quest: $scope.question});
	};

	$scope.getParseData = function() {
		MainService.getData();
		console.log($scope.data);
	};

});