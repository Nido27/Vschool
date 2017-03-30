var app = angular.module("app.Home", ["ngRoute","getApi"]);

app.config(function ($routeProvider) {
    $routeProvider

        .when("/Home", {
        templateUrl: "/js/views/Home/Home.html",
        controller: "HomeController"
    })
})

app.controller("HomeController", function ($scope) {
});