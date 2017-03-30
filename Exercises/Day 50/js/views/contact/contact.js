var app = angular.module("app.contact", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider

        .when("/contact", {
        templateUrl: "/js/views/contact/contact.html",
        controller: "contactController"
    })
})

app.controller("contactController", function ($scope) {
    $scope.contactmessage = "contact";
});