var app = angular.module("app.signin", ["ngRoute", "authModule", "tokenModule", "todoReqModule", "privModule"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/Signin", {
        templateUrl: "/js/Views/SignIn/Signin.html",
        controller: "signinCtrl"
    });
});


app.controller("signinCtrl", function ($scope, authSerivce, TokenService, $location, privService, IdService) {
    $scope.userinput = {};
    $scope.signin = function () {
        authSerivce.signin($scope.userinput).then(function (response) {
            TokenService.save(response.data.token);
            privService.setPriv(response.data.priv);
            IdService.setId(response.data.id);
            $scope.userinput = {};
            location.reload();
            $location.path("/Home");
        }, function (response) {
            $scope.userErr = "You Enter Wrong Username Or Password Please try to Sign in Agin !!!";
            console.log(response);
        })

    };
});