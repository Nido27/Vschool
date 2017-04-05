var app = angular.module("app.SignUp", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/SignUp", {
        templateUrl: "/js/Views/SignUp/SignUp.html",
        controller: "signupCtrl"
    })
})

app.controller("signupCtrl", function ($scope, authSerivce, $location) {
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
            privilege:$scope.userinput.privilege || "User"
        }
        authSerivce.signup(data).then(function (response) {
            console.log(response.data);
            $location.path("/Signin");
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