'use strict';
angular.module('angular.player',['ngRoute','ui.router','angular.player.routes'])
.controller('ConfigController',['$http','$rootScope',function($http,$rootScope){
    $http({
        method:'GET',
        url:'config/.properties'
    }).then(
        function successCallback(response){
            alert('S '+response.data);
        },function errorCallback(response){
            alert(response.statusText+' '+response.status);
        }
    );
}]);