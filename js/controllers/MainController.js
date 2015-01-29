var app = angular.module('parseQ');

app.controller('MainController', function($scope, parseService) {
$scope.question = '';


	$scope.postData = function() {
		if ($scope.question) {
			parseService.postData($scope.question).then(function(res) {
				console.log(res);
				$scope.question = '';
				$scope.getParseData();
			})
		}
	}

	$scope.getParseData = function() {
		parseService.getData().then(function(res) {
			console.log(res);
			$scope.questions = res;
		})
	}

	$scope.updateData = function(id) {
		parseService.updateData(id).then(function(res) {
			console.log(res);
			$scope.getParseData();
		})
	}

	$scope.deleteData = function(id) {
		parseService.deleteData(id).then(function(res) {
			$scope.getParseData();
		})
	}

	$scope.getParseData();
	console.log($scope.questions);
})