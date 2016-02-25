(function () {
	'use strict';

	angular
		.module('codestack', [
			'ngRoute',
			'ngAnimate'
		])
		.config(function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'views/about/main.html',
					 controller: 'AboutCtrl'
				})
				.when('/work', {
					templateUrl: 'views/work/main.html',
					// controller: 'CoursesCtrl'
				})
				.when('/services', {
					templateUrl: 'views/services/main.html',
					// controller: 'CoursesCtrl'
				})
				.when('/courses', {
					templateUrl: 'views/courses/main.html',
					controller: 'CoursesCtrl'
				})
				.when('/careers', {
					templateUrl: 'views/careers/main.html',
					controller: 'CareersCtrl'
				})
				.when('/contact', {
					templateUrl: 'views/contact/main.html',
					controller: 'ContactCtrl'
				})
				.otherwise({
					redirectTo: '/'
				});
		});
}());
