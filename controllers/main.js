/**
* app Module
*
* root module
*/
angular.module('app', ['ngMaterial', 'ui.router', 'ngSanitize'])
.config(function($locationProvider) {
	$locationProvider.html5Mode(true);
})
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider
	.when('/', '/home');

	$stateProvider
	.state('home', {
		templateUrl: '/view/home.html',
		controller: 'HomeCtrl'
	})
	.state('home.self', {
		url: '/home',
		views: {
			'toolbar': {
				templateUrl: '/view/toolbar.html',
				controller: 'ToolbarCtrl'
			},
			'list': {
				templateUrl: '/view/list.html',
				controller: 'ListCtrl'
			},
			'side': {
				templateUrl: '/view/side.html',
				controller: 'SidebarCtrl'
			}
		}
	})
	.state('category', {
		templateUrl: 'view/category.html',
		controller: 'CategoryCtrl'
	})
	.state('category.self', {
		url: '/categories/',
		views: {
			'toolbar': {
				templateUrl: '/view/toolbar.html',
				controller: 'ToolbarCtrl'
			},
			'list': {
				templateUrl: '/view/list2.html',
				controller: 'ListCtrl'
			}
		}
	})
	.state('tag', {
		templateUrl: 'view/tag.html',
		controller: 'TagCtrl'
	})
	.state('tag.self', {
		url: '/tags/',
		views: {
			'toolbar': {
				templateUrl: '/view/toolbar.html',
				controller: 'ToolbarCtrl'
			},
			'list': {
				templateUrl: '/view/list2.html',
				controller: 'ListCtrl'
			}
		}
	})
	.state('article', {
		url: '/articles/',
		templateUrl: '/view/single.html',
		controller: 'SingleCtrl'
	})
})
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange');
})