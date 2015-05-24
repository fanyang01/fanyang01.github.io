angular.module('app')
.value('tagAPI', '/api/tag/')
.factory('getAllTags', function($http, tagAPI, $q){
	return function (){
		return $http.get(tagAPI)
		.then(function(response) {
			return response.data;
		}, function(response) {
			return $q.reject(response.status + " " + response.statusText);
		})
	};
})
.factory('getArticlesByTag', function($http, tagAPI, $q){
	return function (tag) {
		return $http.get(tagAPI + tag)
		.then(function(response) {
			return response.data;
		}, function(response) {
			return $q.reject(response.status + " " + response.statusText);
		})
	};
})
.controller('TagCtrl', function($scope, dateFilter) {
	$scope.articles = [{
		title: "Quicker Sort",
		summary: "Quick sort has a O(NlogN) average running time",
		time: dateFilter(new Date(), 'yyyy-MM-dd')
	}];
	$scope.search = {};
})