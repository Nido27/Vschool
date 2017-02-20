var app = angular.module("myApp", []);
app.service("todoReq", function ($http) {
    this.getData = function () {
        return $http.get("http://api.vschool.io/NaderElSalhat/todo/");
    }
    this.postData = function (data) {
        return $http.post("http://api.vschool.io/NaderElSalhat/todo/", data);
    }
    this.deleteData = function (id) {
        return $http.delete("http://api.vschool.io/NaderElSalhat/todo/" + id);
    }
    this.editData = function (id, data) {
        return $http.put("http://api.vschool.io/NaderElSalhat/todo/" + id, data);
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
    $scope.add = function () {
        var data = {
            title: $scope.task
        }
        todoReq.postData(data).then($scope.loadData, function (error) {
            console.log(error.status);
        });
        $scope.task = "";
    }

    $scope.edit = function (id,editinput) {
        var data = {
            title: editinput
        }
        console.log(editinput);
        todoReq.editData(id,data).then(function () {
            $scope.todoItem = data.title;
            console.log(data.title);
        }, function (error) {
            console.log(error.status);
        });
        $scope.edititem ="";
    }
    $scope.deleteItem = function (_id) {
        todoReq.deleteData(_id).then($scope.loadData, function (error) {
            console.log(error.status);
        });
    }
});