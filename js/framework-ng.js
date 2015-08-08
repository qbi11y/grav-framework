var app = angular.module('Controllers', []);

app.controller('Ctrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
    console.log();
    $scope.activeNav = $location.$$url;
    $scope.updateNav = function(active) {
        $scope.activeNav = active;
    }
}])