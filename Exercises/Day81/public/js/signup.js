var app = angular.module("app.signup", ["ngRoute", "authModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/signup", {
        templateUrl: "/view/signup.html",
        controller: "signupCtrl"
    })
})

app.controller("signupCtrl", function ($scope,authService) {
       $scope.user={};
    $scope.signup=function(){
        var data={
        username:$scope.user.username,
        password:$scope.user.password
    }
        authService.signUp(data).then(function(reponse){
            console.log(reponse.data);
        },function(response){
            console.log(response.status);
        })
         $scope.user={};
    }
})