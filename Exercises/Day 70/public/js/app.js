var app = angular.module("myApp", []);
app.service("todoReq", function ($http) {
    this.getData = function () {
        return $http.get("http://localhost:8080/menu");
    }
    this.postData = function (data) {
        return $http.post("http://localhost:8080/menu/", data);
    }
    this.deleteData = function (id) {
        return $http.delete("http://localhost:8080/menu/" + id);
    }
    this.editData = function (id, data) {
        var queryString = "";
        for (key in data) {
            if (data[key] != undefined) {
                queryString += key + "=" + data[key] + "&"
            }
        }
        console.log(queryString);
        return $http.put("http://localhost:8080/menu/" + id + "?" + queryString);
    }
});

app.controller("myCtrl", function ($scope, todoReq) {
    $scope.loadData = function () {
        todoReq.getData().then(function (response) {
            $scope.todoItems = response.data.data;
        }, function (response) {
            console.log(response.status);
        })
    };
    $scope.add = function () {
        var data = {
            name: $scope.name,
            cost: $scope.cost,
            type: $scope.type
        }
        todoReq.postData(data).then($scope.loadData, function (error) {
            console.log(error.status);
        });
        $scope.name = "";
        $scope.cost = "";
        $scope.type = "";
    }

    $scope.edit = function ($index) {
        console.log($index);
        var data = {
            name: $scope.todoItems[$index].name,
            cost: $scope.todoItems[$index].cost,
            type: $scope.todoItems[$index].type
        };
        var id = $scope.todoItems[$index]._id;
        todoReq.editData(id, data).then(function () {
            $scope.loadData();
            $scope.editName = "";
            $scope.editCost = "";
            $scope.editType = "";
        }, function (error) {
            console.log(error.status);
        });
    }
    $scope.deleteItem = function (_id) {
        todoReq.deleteData(_id).then($scope.loadData, function (error) {
            console.log(error.status);
        });
    }
});