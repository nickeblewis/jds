'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
    $scope.map = {
    center: {
        latitude: 52.2891624,
        longitude: -0.9367031
    },
    zoom: 8
};
}]);