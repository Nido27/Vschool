var app = angular.module("app.blog", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider

        .when("/blog", {
        templateUrl: "/js/views/blog/blog.html",
        controller: "blogController"
    })
})

app.controller("blogController", function ($scope) {
    $scope.blogmessage = "blog";
});