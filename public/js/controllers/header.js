'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
	$scope.global = Global;

	$scope.menu = [{
		'title': 'About',
		'link': 'about',
		'active': false
	},{
		'title': 'Testimonials',
		'link': 'testimonials',
		'active': false
	},{
		'title': 'Photos',
		'link': 'photos',
		'active': false
	},{
		'title': 'Contact Us',
		'link': 'contact',
		'active': false
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