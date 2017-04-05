var app = angular.module("app.signin", ["ngRoute", "authModule", "tokenModule", "todoReqModule"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/Signin", {
        templateUrl: "/js/Views/SignIn/Signin.html",
        controller: "signinCtrl"
    });
});


app.controller("signinCtrl", function ($scope, authSerivce, TokenService, $location) {
    $scope.userinput = {};
    $scope.signin = function () {
        var data = {
            Username: $scope.userinput.Username,
            Password: $scope.userinput.Password
        }
        authSerivce.signin(data).then(function (response) {
            TokenService.save(respresponseonse.data.token);
            console.log(response.data.token);
            $scope.userinput = {};
            $location.path("/Home");
        }, function (response) {
            console.log(response.status);
        })
    };


    //    $scope.signOut = function () {
    //        TokenService.removeToken(response.data.token);
    //        $location.path("/Signin");
    //    }
});