var app = angular.module("app.Homemodule", ["ngRoute", "todoReqModule", "privModule", "tokenModule", "authModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Home", {
        templateUrl: "/js/Views/Home/Home.html",
        controller: "HomeCtrl"
    })
})


app.controller("HomeCtrl", function ($scope, authSerivce, todoReq, privService, IdService, TokenService, $routeParams, $location) {

});