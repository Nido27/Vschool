var app = angular.module("app.Breakfast", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Breakfast", {
        templateUrl: "/js/Views/Products/Breakfast/Breakfast.html",
        controller: "BreakfastCtrl"
    })
})

app.controller("BreakfastCtrl", function ($scope, todoReq) {
    $scope.BreakfastItem = [];
    $scope.sort = function (item) {
        return item.upVoted - item.downVoted;
    }
    $scope.getIndex = function (_id) {
        for (var i = 0; i < $scope.BreakfastItem.length; i++) {
            if ($scope.BreakfastItem[i]._id == _id) {
                return i;
            }
        }
        return -1;
    }
    $scope.loadData = function () {
        todoReq.getData().then(function (response) {
            $scope.BreakfastItem = [];
            var dataGet = response.data.data;
            for (var i = 0; i < dataGet.length; i++) {
                $scope.BreakfastItem.push({
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
            var id = $scope.BreakfastItem[$index]._id;
            var data = {
                name: $scope.BreakfastItem[$index].name,
                image: $scope.BreakfastItem[$index].image,
                type: $scope.BreakfastItem[$index].type,
                description: $scope.BreakfastItem[$index].description
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
        var upvote = $scope.BreakfastItem[$index].upVoted;
        upvote++;
        var data = {
            upVoted: upvote
        }
        todoReq.upVoted(_id, data).then($scope.loadData)

    }


    //downVoted
    $scope.unlike = function (_id) {
        $index = $scope.getIndex(_id);
        var id = $scope.BreakfastItem[$index]._id;
        var downvote = $scope.BreakfastItem[$index].downVoted;
        downvote++;
        var data = {
            downVoted: downvote
        }
        todoReq.downVoted(id, data).then($scope.loadData)
    }

    //Show/Hide Edit
    $scope.editStatus = function (_id) {
        index = $scope.getIndex(_id);
        $scope.BreakfastItem[index].isShowingEdit = !$scope.BreakfastItem[index].isShowingEdit;
       
    }

    //Show/Hide Comment
    $scope.showHideComment = function (_id) {
            index = $scope.getIndex(_id);
            $scope.BreakfastItem[index].isShowingComment = !$scope.BreakfastItem[index].isShowingComment;
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
        $scope.BreakfastItem[index].isShowingAddComment = !$scope.BreakfastItem[index].isShowingAddComment;
    }

    //addcomment
    $scope.addComment = function (id, comment) {
        var data = {
            Comment: comment
        }
        todoReq.Comment(id, data).then($scope.loadData);
    }
});