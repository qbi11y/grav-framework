var app = angular.module('Controllers', ['ui.bootstrap.demo']);

app.run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 60; // always scroll by 50 extra pixels
}]);

app.run(function($rootScope) {
    $rootScope.data = {
        theme: 'gravitant-toolkit'
    };
});

app.controller('MainController', ['$scope', '$http', '$location', '$anchorScroll', function($scope, $http, $location, $anchorScroll) {

    console.log();
   
    $scope.activeNav = $location.$$url;

    $scope.updateNav = function (active) {
        $scope.activeNav = active;
    };
    
    $scope.scrollTo = function (id) {
        if (!document.getElementById(id))
            return;
        
        $location.hash(id);
        $anchorScroll();
               
    };
    
}]);

app.controller('ComponentsController',
    ['$scope',
        function ($scope) {

            $scope.data = {
                filter1: null,
                filter2: null,
                filterItems: [],
                listItems: [],
                checkAll: false
            };

            $scope.viewmodel = {};

            $scope.actions = {
                removeFilter: function (filter) {
                    if (filter.filter == 'Field 1') $scope.data.filter1 = null;
                    if (filter.filter == 'Field 2') $scope.data.filter2 = null;
                },
                clearFilters: function () {
                    $scope.data.filter1 = null;
                    $scope.data.filter2 = null;
                    $scope.actions.updateFilter();
                },
                updateFilter: function () {
                    $scope.data.filterItems = [];
                    if ($scope.data.filter1) { $scope.data.filterItems.push({ filter: 'Field 1', filterValue: $scope.data.filter1 }); }
                    if ($scope.data.filter2) { $scope.data.filterItems.push({ filter: 'Field 2', filterValue: $scope.data.filter2 }); }
                }
            };


            $scope.$watch('data.checkAll', function (val) {
                angular.forEach($scope.data.listItems, function (li) {
                    li.selected = val;
                });
            });

            $scope.$watch('data.filter1', function (val) {
                $scope.actions.updateFilter();
            });

            $scope.$watch('data.filter2', function (val) {
                $scope.actions.updateFilter();
            });

            $scope.initialize = function () {
                for (var i = 1; i <= 3; i++) {
                    $scope.data.listItems.push({ name: "List Item " + i, selected: false });
                }

                $scope.actions.updateFilter();
            };

            $scope.initialize();

        }])
;

