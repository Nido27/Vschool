var app = angular.module("app", []);
app.controller("ctrl", function($scope) {
    $scope.click =function() {
        $scope.header = true
    }
    $scope.newClick = function() {
        $scope.header = false
    }
})