var app = angular.module("app.addPostModule", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/addPost", {
        templateUrl: "/js/Views/addPost/addPost.html",
        controller: "addPostCtrl"
    })
})


app.controller("addPostCtrl", function ($scope, todoReq) {

    //show/hide Post
    $scope.addStatus = function () {
            $scope.showStatus = !$scope.showStatus;
        }
        //Post
    $scope.add = function () {
        var data = {
            title: $scope.title,
            description: $scope.description,
            image: $scope.image,
            upVoted: $scope.upVoted || 0,
            downVoted: $scope.downVoted || 0,
            Comment: $scope.Comment
        }
        todoReq.postData(data).then($scope.loadData, function (error) {
            console.log(error.status);
        });
        $scope.title = "";
        $scope.image = "";
        $scope.description = "";
    }

})