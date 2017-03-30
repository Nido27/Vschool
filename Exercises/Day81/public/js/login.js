var app = angular.module("app.login", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider.when("/login", {
        templateUrl : "/view/login.html",
        controller: "loginCtrl"
    })
})

app.controller("loginCtrl", function($scope,$location,authService) {
    $scope.user={};
    $scope.login=function(){
        var data={
        username:$scope.user.username,
        password:$scope.user.password
    };
        authService.login(data).then(function(reponse){
            $location.path('/home');
            console.log(reponse.data);
        },function(response){
            alert("Username doesn't exist");
            console.log(response.status);
        })
          $scope.user={};
    }
})