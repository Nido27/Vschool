var app = angular.module("app.Products", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Products", {
        templateUrl: "/js/Views/Products/Products.html",
        controller: "ProductsCtrl"
    })
})


app.controller("ProductsCtrl", function ($scope, todoReq) {

})