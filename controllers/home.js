angular.module('app')
.controller('HomeCtrl', function($scope, dateFilter) {
	$scope.articles = [{
		title: "Quicker Sort",
		summary: "Quick sort has a O(NlogN) average running time",
		time: dateFilter(new Date(), 'yyyy-MM-dd')
	}];
	$scope.categories = ['Algorithm', 'Web', 'Golang'];
	$scope.tags = ['C', 'Go', 'linux', 'algorithm', 'web'];

	$scope.search = {};
})
.controller('ToolbarCtrl', function($scope) {
	$scope.title = 'Blog';
})
.controller('ListCtrl', function($scope) {
	$scope.search.something = '';
	$scope.perPage = 5;
	$scope.position = 0;
	$scope.maxPage = function () {
		var len = $scope.articles.length;
		if(len == 0) {
			return 0;
		} else if (len % $scope.perPage == 0) {
			return len / $scope.perPage - 1;
		} else {
			return Math.floor(len / $scope.perPage);
		}
	};
})
.controller('SidebarCtrl', function($scope) {
	$scope.search.q = '';
	$scope.categoryOpen = true;
	$scope.toggleCategory = function() {
		$scope.categoryOpen = !$scope.categoryOpen;
	}
	$scope.tagOpen = true;
	$scope.toggleTag = function() {
		$scope.tagOpen = !$scope.tagOpen;
	}
})
.filter('page', function() {
	return function(items, perPage, position) {
		var len = items.length;
		var start = position * perPage;
		if(start < 0)
			start = 0;
		else if(start > len)
			start = len;

		var end = start + perPage;
		if(end > len) end = len;

		return items.slice(start, end);
	}
})
