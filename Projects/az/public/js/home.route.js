var app = angular.module("app.home", ["ngRoute", "requestsModule", "privModule"]);

app.config(function($routeProvider) {
  $routeProvider.when("/home", {
    templateUrl: "/views/home.tpl.html",
    controller: "homeCtrl"
  });
});

app.controller("homeCtrl", function($scope, reqService, privService) {
  $scope.todoItems = [];
  $scope.userinput = {};
  $scope.priv = privService.getPriv();
  console.log($scope.priv);
  $scope.loadData = function() {
    reqService.get().then(function(response) {
      //suc
      $scope.todoItems = response.data.data;
      $scope.todoItems = $scope.todoItems.map(function(item) {
        item.isEdit = false;
        return item;
      });
      console.log($scope.todoItems);
    }, function(response) {
      //fail
      console.log(response.status);
    });
  };
  $scope.addData = function() {
    reqService.post($scope.userinput).then(function(response) {
      $scope.loadData();
      $scope.userinput = {};
    }, function(response) {
      console.log(response.status);
    });
  };

  $scope.toggleEdit = function(item) {
    item.isEdit = ! item.isEdit;
  };

  $scope.saveData = function(id, data) {
    reqService.put(id, data).then(function(response) {
      $scope.loadData();
    }, function(response) {
      console.log(response.status);
    });
  };

  $scope.delete = function(id) {
    reqService.delete(id).then(function(response) {
      $scope.loadData();
    }, function(response) {
      console.log(response.status);
    });
  };
});
