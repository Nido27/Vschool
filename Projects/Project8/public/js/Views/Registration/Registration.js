var app = angular.module("app.Registration", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Registration", {
        templateUrl: "/js/Views/Registration/Registration.html",
        controller: "RegistrationCtrl"
    })
})


app.controller("RegistrationCtrl", function ($scope, todoReq) {


})