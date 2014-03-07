'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
	$scope.global = Global;

	$scope.menu = [{
		'title': 'Who we are',
		'link': 'whoweare',
		'active': true
	},{
		'title': 'What we do',
		'link': 'whatwedo',
		'active': true
	},{
		'title': 'Where we are',
		'link': 'whereweare',
		'active': true
	},{
		'title': 'Get in contact',
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