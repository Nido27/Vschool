var app = angular.module("app.whyilove", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider

        .when("/whyilove", {
        templateUrl: "/js/views/whyilove/whyilove.html",
        controller: "whyiloveController"
    })
})

app.controller("whyiloveController", function ($scope) {
    $scope.contactmessage = "qdeqweqweqwe";
});