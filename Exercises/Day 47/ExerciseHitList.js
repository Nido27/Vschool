var app = angular.module("myApp", []);
app.service("todoReq", function ($http) {
    this.getData = function () {
        return $http.get("http://api.vschool.io:6543/hitlist.json");
    }
});
    app.controller("myCtrl", function ($scope, todoReq) {
    $scope.loadData = function () {
        todoReq.getData().then(function (response) {
            $scope.todoItems = response.data;
        }, function (response) {
            console.log(response.status);
        })
    };
    });