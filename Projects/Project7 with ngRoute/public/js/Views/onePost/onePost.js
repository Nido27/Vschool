var app = angular.module("app.onePostModule", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/onePost/:id", {
        templateUrl: "/js/Views/onePost/onePost.html",
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
                title: dataGet.title,
                description: dataGet.description,
                image: dataGet.image,
                upVoted: dataGet.upVoted || 0,
                downVoted: dataGet.downVoted || 0,
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
    $scope.editStatus = function () {
        $scope.item.isShowingEdit = !$scope.item.isShowingEdit;
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
                title: $scope.item.title,
                description: $scope.item.description
            };

            todoReq.editData(id, data).then(function () {
                $scope.loadDatabyId();
                $scope.editStatus();
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