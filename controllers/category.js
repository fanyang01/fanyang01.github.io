angular.module('app')
.value('categoryAPI', '/api/category/')
.factory('getAllCategorys', function($http, categoryAPI, $q){
	return function (){
		return $http.get(categoryAPI)
		.then(function(response) {
			return response.data;
		}, function(response) {
			return $q.reject(response.status + " " + response.statusText);
		})
	};
})
.factory('getArticlesByCategory', function($http, categoryAPI, $q){
	return function (category) {
		return $http.get(categoryAPI + category)
		.then(function(response) {
			return response.data;
		}, function(response) {
			return $q.reject(response.status + " " + response.statusText);
		})
	};
})
.controller('CategoryCtrl', function($scope, dateFilter) {
	$scope.articles = [{
		title: "Quicker Sort",
		summary: "Quick sort has a O(NlogN) average running time",
		time: dateFilter(new Date(), 'yyyy-MM-dd')
	}];
	$scope.search = {};
})