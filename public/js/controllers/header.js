'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
	$scope.global = Global;

	$scope.menu = [{
		'title': 'About',
		'link': 'about',
		'active': true
	},{
		'title': 'Testimonials',
		'link': 'testimonials',
		'active': true
	},{
		'title': 'Photos',
		'link': 'photos',
		'active': true
	},{
		'title': 'Contact Us',
		'link': 'contact',
		'active': true
	},{
		'title': 'Articles',
		'link': 'articles',
		'active': false
	},{
		'title': 'Create New Article',
		'link': 'articles/create',
		'active': false
	}];
    
    $scope.isCollapsed = false;
}]);