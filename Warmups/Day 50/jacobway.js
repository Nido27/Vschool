var app = angular.module("app", []);

app.controller("addCtrl", function ($scope) {
    $scope.addNums = function () {
        $scope.total = $scope.num1 + $scope.num2;
        $scope.num1 = 0;
        $scope.num2 = 0;
    }
});

app.controller("multiCtrl", function ($scope) {
    $scope.multiNums = function () {
        $scope.total = $scope.num1 * $scope.num2;
        $scope.num1 = 0;
        $scope.num2 = 0;
    }
});