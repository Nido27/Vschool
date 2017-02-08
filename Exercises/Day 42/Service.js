var app = angular.module("myApp", []);
app.service("useServe", function () {
    this.StdArray = [];
    this.add = function (name) {
        this.StdArray.push(name);
    }
    this.remove =function(index){
        this.StdArray.splice(index,1)
    }
    this.update=function(index,name){
         this.StdArray(index)=name;
    }
});
app.controller("mainCtrl", function ($scope, useServe) {
    $scope.printStd = useServe.StdArray;
    $scope.addStd = function () {
        $scope.std = useServe.add($scope.std);
    }
    $scope.remove=function(index){
        useServe.remove(index);
    }
    $scope.Updatestd=function(index){
     useServe.update(index);
    $scope.printStd(index) = useServe.update($scope.std);
    }
    
});