var app = angular.module("app.Sandiwsh", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Sandiwsh", {
        templateUrl: "/js/Views/Products/Sandiwsh/Sandiwsh.html",
        controller: "SandiwshCtrl"
    })
})

app.controller("SandiwshCtrl", function ($scope, todoReq) {});