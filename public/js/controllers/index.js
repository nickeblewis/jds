'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
    $scope.map = {
    center: {
        latitude: 52.333534,
        longitude: -0.7249246
    },
    zoom: 12
};
}]);