var app = angular.module("myApp", []);
app.service("todoReq", function () {
    this.add = function (first, second) {
        this.answer = this.first + this.second;
    }
    this.sub = function (first, second) {
        this.answer = this.first - this.second;
    }
    this.div = function (first, second) {
        this.answer = this.first / this.second;
    }
    this.mult = function (first, second) {
        this.answer = this.first * this.second;
    }
})

app.controller("myCtrl", function ($scope, todoReq) {

    $scope.add = function () {
        todoReq.add($scope.finput, $scope.sinput);
        $scope.answer = $scope.finput + $scope.sinput;
        $scope.finput = "";
        $scope.sinput = "";

    };

    $scope.sub = function () {
        todoReq.sub($scope.finput, $scope.sinput);
        $scope.answer = $scope.finput - $scope.sinput;
        $scope.finput = "";
        $scope.sinput = "";

    };


    $scope.div = function () {
        todoReq.div($scope.finput, $scope.sinput);
        $scope.answer = $scope.finput / $scope.sinput;
        $scope.finput = "";
        $scope.sinput = "";

    };


    $scope.mult = function () {
        todoReq.mult($scope.finput, $scope.sinput);
        $scope.answer = $scope.finput * $scope.sinput;
        $scope.finput = "";
        $scope.sinput = "";

    };

});