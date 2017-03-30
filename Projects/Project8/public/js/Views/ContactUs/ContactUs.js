var app = angular.module("app.ContactUs", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/ContactUs", {
        templateUrl: "/js/Views/ContactUs/ContactUs.html",
        controller: "ContactUsCtrl"
    })
})


app.controller("ContactUsCtrl", function ($scope, todoReq) {


})