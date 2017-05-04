var app = angular.module("app.SignUp", ["ngRoute", "todoReqModule","authModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/SignUp", {
        templateUrl: "/js/Views/SignUp/SignUp.html",
        controller: "signupCtrl"
    })
})

app.controller("signupCtrl", function ($scope, authSerivce, $location,TokenService, privService, IdService) {
//    $scope.userinput = {};
//    $scope.signin = function () {
//        authSerivce.signin($scope.userinput).then(function (response) {
//            TokenService.save(response.data.token);
//            privService.setPriv(response.data.priv);
//            IdService.setId(response.data.id);
//            $scope.userinput = {};
//            location.reload();
//            $location.path("/Home");
//        }, function (response) {
//            $scope.userErr = "You Enter Wrong Username Or Password Please try to Sign in Agin !!!";
//            console.log(response);
//        })
//
//    };
    $scope.userinput = {};
    $scope.signup = function () {
        var data = {
            image: $scope.userinput.image,
            firstName: $scope.userinput.firstName,
            lastName: $scope.userinput.lastName,
            Email: $scope.userinput.Email,
            Username: $scope.userinput.Username,
            Password: $scope.userinput.Password,
            Password2: $scope.userinput.Password2,
            Gender: $scope.userinput.Gender,
            age: $scope.userinput.age,
            Country: $scope.userinput.Country,
            privilege:$scope.userinput.privilege
        }
        authSerivce.signup(data).then(function (response) {
            console.log(response.data);
            $location.path("/SignUp");
            $scope.userinput = {};
        }, function (response) {
            console.log(response.status);
        })
    };
    $scope.validate = function () {
        var val = true;
        if ($scope.userinput.Username) {
            val = val & false;
        } else if ($scope.userinput.Password) {
            val = val & false;
        } else if ($scope.userinput.Password2) {
            val = val & false;
        } else if ($scope.userinput.Password != $scope.userinput.Password2) {
            val = val & false;
        } else {
            val = val & true;
        }
        return val;
    }
    $scope.Reset = function () {
        $scope.userinput = {};
    }
});