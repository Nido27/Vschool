var app = angular.module("app.Desserts", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Desserts", {
        templateUrl: "/js/Views/Products/Desserts/Desserts.html",
        controller: "DessertsCtrl"
    })
})

app.controller("DessertsCtrl", function ($scope, todoReq) {
});