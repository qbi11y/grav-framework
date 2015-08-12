var app = angular.module('Framework', ['ngRoute', 'Controllers']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainController'
        })
        .when('/styleguide', {
            templateUrl: 'views/styleguide.html',
            controller: 'MainController'
        })
        .when('/templates', {
            templateUrl: 'views/templates.html',
            controller: 'MainController'
        })
        .when('/components', {
            templateUrl: 'views/components.html',
            controller: 'MainController'
        })
        .when('/elements', {
            templateUrl: 'views/elements.html',
            controller: 'MainController'
        });


}]);