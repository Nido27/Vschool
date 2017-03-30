var app = angular.module("myApp", ["ngRoute", "todoReqModule", "app.Homemodule", "app.onePostModule", "app.addPostModule","app.About"]);
app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/", {
        redirectTo: "/Home"
    }).otherwise("/", {
        redirectTo: "/Home"
    })
})