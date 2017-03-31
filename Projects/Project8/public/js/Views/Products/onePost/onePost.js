var app = angular.module("app.onePost", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/onePost", {
        templateUrl: "/js/Views/Products/onePost/onePost.html",
        controller: "onePostCtrl"
    })
})

app.controller("onePostCtrl", function ($scope, $routeParams, todoReq) {
    var id = $routeParams.id;
    $scope.loadDatabyId = function () {
        todoReq.getDataById(id).then(function (response) {
            var dataGet = response.data.data;
            $scope.item = dataGet;
            $scope.item = {
                _id: dataGet._id,
                image: dataGet.image,
                name: dataGet.name,
                description: dataGet.description,
                upVoted: dataGet.upVoted || 0,
                downVoted: dataGet.downVoted || 0,
                type: dataGet.type,
                Comment: dataGet.Comment,
                isShowingComment: false,
                isShowingAddComment: false,
                isShowingEdit: false
            }
        }, function (response) {
            console.log(response.status);
        })
    };

    //upVoted
    $scope.like = function () {
        $scope.item.upVoted++;
        var data = {
            upVoted: $scope.item.upVoted
        }
        todoReq.upVoted(id, data).then($scope.loadDatabyId, function (respone) {
            console.log(respone.status)
        })
    }

    //downVoted
    $scope.unlike = function () {
        $scope.item.downVoted++;
        var data = {
            downVoted: $scope.item.downVoted
        }
        todoReq.downVoted(id, data).then($scope.loadDatabyId)
    }

    //Show/Hide addComment
    $scope.showHideAddComment = function () {

        $scope.item.isShowingAddComment = !$scope.item.isShowingAddComment;
    }

    //Show/Hide Edit
    $scope.editShowing = function () {
        $scope.isShowingEdit = !$scope.isShowingEdit;
       
    }

    //Delete
    $scope.deleteItem = function (_id) {
        todoReq.deleteData(_id).then($scope.loadDatabyId, function (error) {
            console.log(error.status);
        });
    }

    //Edit
    $scope.edit = function () {
            var data = {
                name: $scope.name,
                image: $scope.image,
                description: $scope.description,
                type: $scope.type
            };

            todoReq.editData(id, data).then(function () {
                $scope.loadDatabyId();
            }, function (error) {
                console.log(error.status);
            });
        }
        //Show/Hide Comment
    $scope.showHideComment = function (_id) {

            $scope.item.isShowingComment = !$scope.item.isShowingComment;
        }
        // Remove Specific Comment
    $scope.removeComment = function (index) {
            var data = {
                index: index
            }
            todoReq.deleteComment(id, data).then($scope.loadDatabyId)
        }
        //addcomment
    $scope.addComment = function (comment) {
        var data = {
            Comment: comment
        }
        todoReq.Comment(id, data).then($scope.loadDatabyId);
    }
})