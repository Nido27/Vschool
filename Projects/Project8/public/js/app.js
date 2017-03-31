var app = angular.module("myApp", ["ngRoute", "todoReqModule", "app.Homemodule", "app.Feedback", "app.Products", "app.Registration", "app.ContactUs", "app.Breakfast", "app.Desserts", "app.Juice&IceCream", "app.Platters", "app.Sandiwsh","app.onePost"]);
app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/", {
        redirectTo: "/Home"
    }).otherwise("/", {
        redirectTo: "/Home"
    })
})