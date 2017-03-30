var app = angular.module("app.Homemodule", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Home", {
        templateUrl: "/js/Views/Home/Home.html",
        controller: "HomeCtrl"
    })
})

app.controller("HomeCtrl", function ($scope, todoReq) {
    $scope.timeLine = [];
    $scope.sort = function (item) {
        return item.upVoted - item.downVoted;
    }
    $scope.getIndex = function (_id) {
        for (var i = 0; i < $scope.timeLine.length; i++) {
            if ($scope.timeLine[i]._id == _id) {
                return i;
            }
        }
        return -1;
    }
    $scope.loadData = function () {
        todoReq.getData().then(function (response) {
            $scope.timeLine = [];
            var dataGet = response.data.data;
            for (var i = 0; i < dataGet.length; i++) {
                $scope.timeLine.push({
                    _id: dataGet[i]._id,
                    title: dataGet[i].title,
                    description: dataGet[i].description,
                    image:dataGet[i].image,
                    upVoted: dataGet[i].upVoted || 0,
                    downVoted: dataGet[i].downVoted || 0,
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
            var id = $scope.timeLine[$index]._id;
            var data = {
                title: $scope.timeLine[$index].title,
                image: $scope.timeLine[$index].image,
                description: $scope.timeLine[$index].description
            };

            todoReq.editData(id, data).then(function () {
                $scope.loadData();
                $scope.editStatus();
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
        var upvote = $scope.timeLine[$index].upVoted;
        upvote++;
        var data = {
            upVoted: upvote
        }
        todoReq.upVoted(_id, data).then($scope.loadData)

    }


    //downVoted
    $scope.unlike = function (_id) {
        $index = $scope.getIndex(_id);
        var id = $scope.timeLine[$index]._id;
        var downvote = $scope.timeLine[$index].downVoted;
        downvote++;
        var data = {
            downVoted: downvote
        }
        todoReq.downVoted(id, data).then($scope.loadData)
    }

    //Show/Hide Edit
    $scope.editStatus = function (_id) {
        index = $scope.getIndex(_id);
        $scope.timeLine[index].isShowingEdit = !$scope.timeLine[index].isShowingEdit;
    }

    //Show/Hide Comment
    $scope.showHideComment = function (_id) {
            index = $scope.getIndex(_id);
            $scope.timeLine[index].isShowingComment = !$scope.timeLine[index].isShowingComment;
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
        $scope.timeLine[index].isShowingAddComment = !$scope.timeLine[index].isShowingAddComment;
    }

    //addcomment
    $scope.addComment = function (id, comment) {
        var data = {
            Comment: comment
        }
        todoReq.Comment(id, data).then($scope.loadData);
    }
});