var app = angular.module('ProjectApp', ['ngRoute', 'ngAnimate', 'ngTouch', 'ui.bootstrap']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/projects/', {
            controller: 'MainController',
            templateUrl: 'views/projects.html',
            activetab: 'projects'
        })
        .when('/projects/:id', {
            controller: 'ProjectDescriptionController',
            templateUrl: 'views/project_description.html',
            activetab: 'projects'
        })
        .when('/about/', {
            templateUrl: 'views/about.html',
            activetab: 'about'
        })
        .when('/photography/', {
            templateUrl: 'views/photography.html',
            activetab: 'photography'
        })
        .otherwise({
            redirectTo: '/projects/'
        });
});
