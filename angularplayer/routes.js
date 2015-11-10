'use strict';
angular.module('angular.player.routes',['login.module'])
.config(['$stateProvider','$routeProvider',function($stateProvider,$routeProvider){
    $stateProvider.state("app.home",{
        url:"/",
        abstract:true,
        templateUrl:"login/login.html",
        controller:'loginController'
    });
    $routeProvider.otherwise("app.home");
//    $routeProvider.when('/',{
//        templateUrl:'login/login.html',
//        controller: 'loginController'    
//    });
}])