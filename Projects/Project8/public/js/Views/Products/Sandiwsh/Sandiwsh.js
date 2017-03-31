var app = angular.module("app.Sandiwsh", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Sandiwsh", {
        templateUrl: "/js/Views/Products/Sandiwsh/Sandiwsh.html",
        controller: "SandiwshCtrl"
    })
})

app.controller("SandiwshCtrl", function ($scope, todoReq) {
    $scope.SandiwshItem = [];
    $scope.sort = function (item) {
        return item.upVoted - item.downVoted;
    }
    $scope.getIndex = function (_id) {
        for (var i = 0; i < $scope.SandiwshItem.length; i++) {
            if ($scope.SandiwshItem[i]._id == _id) {
                return i;
            }
        }
        return -1;
    }
    $scope.loadData = function () {
        todoReq.getData().then(function (response) {
            $scope.SandiwshItem = [];
            var dataGet = response.data.data;
            for (var i = 0; i < dataGet.length; i++) {
                $scope.SandiwshItem.push({
                    _id: dataGet[i]._id,
                    image: dataGet[i].image,
                    name: dataGet[i].name,
                    description: dataGet[i].description,
                    upVoted: dataGet[i].upVoted || 0,
                    downVoted: dataGet[i].downVoted || 0,
                    type: dataGet[i].type,
                    Comment: dataGet[i].Comment,
                    isShowingComment: false,
                    isShowingAddComment: false,
                    isShowingEdit: false
                })
            }
        }, function (response) {
            console.log(response.status);
        })
    };


    //Edit
    $scope.edit = function (_id) {
            $index = $scope.getIndex(_id);
            var id = $scope.SandiwshItem[$index]._id;
            var data = {
                name: $scope.SandiwshItem[$index].name,
                image: $scope.SandiwshItem[$index].image,
                description: $scope.SandiwshItem[$index].description,
                type: $scope.SandiwshItem[$index].type
            };

            todoReq.editData(id, data).then(function () {
                $scope.loadData();

            }, function (error) {
                console.log(error.status);
            });
        }
        //Delete
    $scope.deleteItem = function (_id) {
            todoReq.deleteData(_id).then($scope.loadData, function (error) {
                console.log(error.status);
            });
        }
        //upVoted
    $scope.like = function (_id) {
        $index = $scope.getIndex(_id);
        var upvote = $scope.SandiwshItem[$index].upVoted;
        upvote++;
        var data = {
            upVoted: upvote
        }
        todoReq.upVoted(_id, data).then($scope.loadData)

    }


    //downVoted
    $scope.unlike = function (_id) {
        $index = $scope.getIndex(_id);
        var id = $scope.SandiwshItem[$index]._id;
        var downvote = $scope.SandiwshItem[$index].downVoted;
        downvote++;
        var data = {
            downVoted: downvote
        }
        todoReq.downVoted(id, data).then($scope.loadData)
    }

    //Show/Hide Edit
    $scope.editShowing = function (_id) {
        index = $scope.getIndex(_id);
        $scope.SandiwshItem[index].isShowingEdit = !$scope.SandiwshItem[index].isShowingEdit;

    }

    //Show/Hide Comment
    $scope.showHideComment = function (_id) {
            index = $scope.getIndex(_id);
            $scope.SandiwshItem[index].isShowingComment = !$scope.SandiwshItem[index].isShowingComment;
        }
        // Remove Specific Comment
    $scope.removeComment = function (id, index) {
            var data = {
                index: index
            }
            todoReq.deleteComment(id, data).then($scope.loadData)
        }
        //Show/Hide addComment
    $scope.showHideAddComment = function (_id) {
        index = $scope.getIndex(_id);
        $scope.SandiwshItem[index].isShowingAddComment = !$scope.SandiwshItem[index].isShowingAddComment;
    }

    //addcomment
    $scope.addComment = function (id, comment) {
        var data = {
            Comment: comment
        }
        todoReq.Comment(id, data).then($scope.loadData);
    }
});