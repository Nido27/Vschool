var app = angular.module("app.Platters", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Platters", {
        templateUrl: "/js/Views/Products/Platters/Platters.html",
        controller: "PlattersCtrl"
    })
})

app.controller("PlattersCtrl", function ($scope, todoReq) {
});