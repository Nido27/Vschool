var app = angular.module("app.Candidness", ["ngRoute", "getApi"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/Candidness", {
            templateUrl: "/js/views/Candidness/Candidness.html",
            controller: "CandidnessController"
        })
})

app.controller("CandidnessController", function ($scope, todoReq) {

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