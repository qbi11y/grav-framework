var app = angular.module('Framework', ['ngRoute', 'Controllers']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider

    .when('/' , {
        templateUrl: 'views/main.html',
        controller: 'Ctrl'
    })

    .when('/styleguide', {
        templateUrl: 'views/styleguide.html',
        controller: 'Ctrl'
    })

    .when('/templates', {
        templateUrl: 'views/templates.html',
        controller: 'Ctrl'
    })

    .when('/components', {
        templateUrl: 'views/components.html',
        controller: 'Ctrl'
    })

    .when('/elements', {
        templateUrl: 'views/elements.html',
        controller: 'Ctrl'
    })

    
}]);