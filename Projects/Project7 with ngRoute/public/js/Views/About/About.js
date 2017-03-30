var app = angular.module("app.About", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/About", {
        templateUrl: "/js/Views/About/About.html",
        controller: "AboutCtrl"
    })
})


app.controller("AboutCtrl", function ($scope, todoReq) {

})