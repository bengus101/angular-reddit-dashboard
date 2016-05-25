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
}]);

console.log('this file is running.'); 