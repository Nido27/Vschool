var app = angular.module("app.addItem", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/addItem", {
        templateUrl: "/js/Views/Products/addItem/addItem.html",
        controller: "addItemCtrl"
    })
})


app.controller("addItemCtrl", function ($scope, todoReq) {

    //show/hide Post
    $scope.addStatus = function () {
            $scope.showStatus = !$scope.showStatus;
        }
        //Post
    $scope.add = function () {
        var data = {
            image: $scope.image,
            name: $scope.name,
            description: $scope.description,
            upVoted: $scope.upVoted || 0,
            downVoted: $scope.downVoted || 0,
            type: $scope.type,
            Comment: $scope.Comment

        }
        todoReq.postData(data).then($scope.loadData, function (error) {
            console.log(error.status);
        });
        $scope.image = "";
        $scope.name = "";
        $scope.description = "";
        $scope.type = "Select type";
    }

})