var redditHW = angular.module('redditHW', []);

redditHW.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.searchTerm = '';
	$scope.
	$scope.search = function() {
		var req = {
			url: "https://www.reddit.com/api/v1/" + $scope.searchTerm,
			method: "GET"
		}
	}


}]);

console.log('this file is running.'); 