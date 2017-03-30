var app = angular.module("app.home", ["ngRoute", "apiModule"]);
app.config(function($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl : "/view/home.html",
        controller: "homeCtrl"
    })
})

app.controller("homeCtrl", function($scope,apiService) {
    $scope.userInput = {};
    $scope.loadData = function() {
        apiService.getData().then(function(response) {
            $scope.list = [];
            var temp = response.data.data;
            for(var i = 0; i < temp.length; i++) {
                $scope.list.push({
                    _id: temp[i]._id,
                    name: temp[i].name,
                    cost: temp[i].cost,
                    isDone: temp[i].isDone,
                    isEdit: false
                })
            }
        })
    }
    $scope.add = function() {
        var data = {
            name : $scope.userInput.name,
            cost: $scope.userInput.cost,
            isDone: false
        }
        apiService.postData(data).then($scope.loadData);
         $scope.userInput = {};
        
    }
    $scope.remove = function(id) {
        apiService.deleteData(id).then($scope.loadData)
    }
    $scope.edit = function(index) {
        $scope.list[index].isEdit = !$scope.list[index].isEdit
    }
    $scope.save = function(id, item) {
        
        var data = {
            name: item.name,
            cost: item.cost,
            isDone: item.isDone,
        }
        apiService.updateData(id,data).then($scope.loadData)
    }
    
})