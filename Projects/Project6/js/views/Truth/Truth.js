var app = angular.module("app.Truth", ["ngRoute", "getApi"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/Truth", {
            templateUrl: "/js/views/Truth/Truth.html",
            controller: "TruthController"
        })
})

app.controller("TruthController", function ($scope, todoReq) {

    $scope.add = function () {
        var data = {
            title: $scope.titlename,
            description: $scope.addtext
        }
            todoReq.add(data).then(alert("Done"), function (error) {
                console.log(error.status);
            });
        $scope.addtext = "";
        $scope.titlename = "";

    }


});