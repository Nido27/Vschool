var app = angular.module("myApp", []);
app.service("todoReq", function ($http) {
    this.getData = function () {
        return $http.get("http://localhost:8080/resturant");
    }
    this.postData = function (data) {
        return $http.post("http://localhost:8080/resturant/", data);
    }
    this.deleteData = function (id) {
        return $http.delete("http://localhost:8080/resturant/" + id);
    }
    this.editData = function (id, data) {
        var str = "?";
        for(key in data){
            str += key;
            str += "=";
            str += data[key];
            str += "&"
        }
        return $http.put("http://localhost:8080/resturant/" + id + str);
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
            name: $scope.name,
             name: $scope.cost,
             name: $scope.type
        }
        todoReq.postData(data).then($scope.loadData, function (error) {
            console.log(error.status);
        });
        $scope.task = "";
    }

    $scope.edit = function (id, editinput) {
        var data = {
            name: editinput
        }
      
        todoReq.editData(id, data).then(function () {
            $scope.todoItem = data.name;
        }, function (error) {
            console.log(error.status);
        });
        $scope.edititem = "";
        $scope.loadData();
    }
    $scope.deleteItem = function (_id) {
        todoReq.deleteData(_id).then($scope.loadData, function (error) {
            console.log(error.status);
        });
    }
});