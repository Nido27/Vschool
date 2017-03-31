var app = angular.module("app.Homemodule", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Home", {
        templateUrl: "/js/Views/Home/Home.html",
        controller: "HomeCtrl"
    })
})


app.controller("HomeCtrl", function ($scope, todoReq) {
});