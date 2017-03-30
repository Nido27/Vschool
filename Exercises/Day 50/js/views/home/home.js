var app = angular.module("app.home", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider

        .when("/home", {
        templateUrl: "/js/views/home/home.html",
        controller: "homeController"
    })
})

app.controller("homeController", function ($scope) {
    $scope.homemessage = "home";
});