angular.module('app.routes',['ngRoute'])
    .config(function($routeProvider,$locationProvider){
    
        $routeProvider
            //when home route
            .when('/', {
                templateUrl:'app/views/pages/home.html',
                controller:'mainController',
                controllerAs:'main'
            });
    
        //get rid of the default url hash
        $locationProvider.html5Mode(true);
    });