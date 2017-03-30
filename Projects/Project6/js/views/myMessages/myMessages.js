var app = angular.module("app.myMessages", ["ngRoute", "getApi"]);

app.config(function ($routeProvider) {
    $routeProvider

        .when("/myMessages", {
        templateUrl: "/js/views/myMessages/myMessages.html",
        controller: "myMessagesController"
    })
})

app.controller("myMessagesController", function ($scope, todoReq) {
    $scope.loadData = function () {
        todoReq.getData().then(function (response) {
            console.log(response);    
           $scope.list = response.data
           $scope.NumberofMessage=response.data.length;
        }, function (response) {
            console.log(response.status);  
        })
         
    };
    
     $scope.delete= function (id) {
        todoReq.delete(id).then($scope.loadData, function (error) {
            console.log(error.status);
        });
    }
     
    
})