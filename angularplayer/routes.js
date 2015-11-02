'use strict';
angular.module('angular.player.routes',['login_module'])
.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'login/login.html',
        controller: loginController    
    });
}])