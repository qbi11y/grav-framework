var toolkitApp = angular.module('toolkitApp', ['smart-table']);

toolkitApp.run(function ($rootScope) {
    $rootScope.data = {
        theme: 'gravitant-toolkit'
    };

    $('body').tooltip({
        selector: '[data-toggle="tooltip"]',
        container: 'body'
    });    

    $('body').popover({
        selector: '[data-toggle="popover"]',
        container: 'body',
        html: true,
        content: function () {
            return $(this).next('.popover-content').html();
        }         
    });
    
    $('.popper').popover({
        container: 'body',
        html: true,
       
    });
    
    $('body').on('click', function (e) {
        $('[data-toggle="popover"]').each(function () {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });
    
});


toolkitApp.controller('MainController',
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
                removeFilter: function(filter) {
                    if (filter.filter == 'Field 1') $scope.data.filter1 = null;
                    if (filter.filter == 'Field 2') $scope.data.filter2 = null;
                },
                clearFilters: function() {
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
                for (var i = 1; i <= 5; i++) {
                    $scope.data.listItems.push(
                        {
                            name: "List Item " + i,
                            selected: false,
                            column1: 'Value ' + i,
                            column2: 'Value ' + i,
                            column3: 'Value ' + i,
                            column4: 'Value ' + i
                        });
                }

                $scope.actions.updateFilter();
            };

            $scope.initialize();

        }])
;