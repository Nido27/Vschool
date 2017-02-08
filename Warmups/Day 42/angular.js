var app = angular.module("myApp", []);

app.controller("mainCtrl", function($scope) {
  $scope.names = [];
  $scope.addName = function() {
    $scope.names.push($scope.name);
    $scope.name = "";
  };
  $scope.remove = function(index){
    console.log(index);
  }
});