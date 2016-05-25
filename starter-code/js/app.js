var redditHW = angular.module('redditHW', []);

redditHW.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.searchTerm = '';

	$scope.search = function() {
		var req = {
			url: "http://www.reddit.com/search.json?q=ferrari" + $scope.searchTerm,
			method: 'GET'
		}

		$http(req).then(function success(res) {
			var results = res.data;
			console.log(results);
		}, function error(res) {
			console.log(res);
		});
	}

	$scope.history = [
		"Item 0",
		"Item 1",
		"Item 2",
		"Item 3",
		"Item...etc"
	];

	$scope.sidebar = function(results) {
		var results = res.object;
		$scope.history.push(this.results);
	}
}]);

console.log('this file is running.'); 