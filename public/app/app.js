;(function () {
	'use strict';

	angular
		.module('codestack', [
			'ngRoute',
			'ngAnimate'
		])
		.config(function ($routeProvider, $locationProvider) {
			$locationProvider.html5Mode(true);

			$routeProvider
				.when('/', {
					templateUrl: '/partials/home/home',
					// controller: 'HomeCtrl'
				})
				.when('/about', {
					templateUrl: '/partials/about/about',
					controller: 'AboutCtrl'
				})
				.when('/work', {
					templateUrl: '/partials/work/work',
					controller: 'WorkCtrl'
				})
				.when('/courses', {
					templateUrl: '/partials/courses/courses',
					controller: 'CoursesCtrl'
				})
				.when('/careers', {
					templateUrl: '/partials/careers/careers',
					controller: 'CareersCtrl'
				})
				.when('/contact', {
					templateUrl: '/partials/contact/contact',
					controller: 'ContactCtrl'
				})
				.otherwise({
					redirectTo: '/'
				});
		});
}())
