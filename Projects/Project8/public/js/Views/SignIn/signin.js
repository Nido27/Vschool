var app = angular.module("app.signin", ["ngRoute", "authModule", "tokenModule", "todoReqModule","privModule"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/Signin", {
        templateUrl: "/js/Views/SignIn/Signin.html",
        controller: "signinCtrl"
    });
});


app.controller("signinCtrl", function ($scope, authSerivce, TokenService, $location ,privService) {
    $scope.userinput = {};
    $scope.signin = function () {
        authSerivce.signin($scope.userinput).then(function(response) {
            TokenService.save(response.data.token);
            privService.setPriv(response.data.priv);
            console.log(response.data)
            $scope.userinput = {};
            $location.path("/Home");
        }, function (response) {
            console.log(response);
        })
    };
});