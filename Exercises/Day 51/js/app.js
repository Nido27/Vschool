var app = angular.module("app", ["ngRoute", "app.home", "app.whyilove", "app.about"]);

app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/", {
        redirectTo: "/home"
    }).otherwise("/", {
        redirectTo: "/home"
    })
})