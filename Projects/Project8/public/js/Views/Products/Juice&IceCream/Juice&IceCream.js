var app = angular.module("app.Juice&IceCream", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Juice&IceCream", {
        templateUrl: "/js/Views/Products/Juice&IceCream/Juice&IceCream.html",
        controller: "Juice&IceCreamCtrl"
    })
})

app.controller("Juice&IceCreamCtrl", function ($scope, todoReq) {
});