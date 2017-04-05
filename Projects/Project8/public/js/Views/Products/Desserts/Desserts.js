var app = angular.module("app.Desserts", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Desserts", {
        templateUrl: "/js/Views/Products/Desserts/Desserts.html",
        controller: "DessertsCtrl"
    })
})

app.controller("DessertsCtrl", function ($scope, todoReq) {
     $scope.DessertsItem = [];
    $scope.sort = function (item) {
        return item.upVoted - item.downVoted;
    }
    $scope.getIndex = function (_id) {
        for (var i = 0; i < $scope.DessertsItem.length; i++) {
            if ($scope.DessertsItem[i]._id == _id) {
                return i;
            }
        }
        return -1;
    }
    $scope.loadData = function () {
        todoReq.getData().then(function (response) {
            $scope.DessertsItem = [];
            var dataGet = response.data.data;
            for (var i = 0; i < dataGet.length; i++) {
                $scope.DessertsItem.push({
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
                    isShowingEdit: false,
                    typeTemp: dataGet[i].type
                })
            }
        }, function (response) {
            console.log(response.status);
        })
    };


   //Edit
    $scope.edit = function (_id) {
            $index = $scope.getIndex(_id);
            var id = $scope.DessertsItem[$index]._id;
            var data = {
                name: $scope.DessertsItem[$index].name,
                image: $scope.DessertsItem[$index].image,
                description: $scope.DessertsItem[$index].description,
                typeTemp: $scope.DessertsItem[$index].typeTemp
            };
            todoReq.editData(id, data).then(function () {
                $scope.loadData();
            }, function (error) {
                console.log(error.status);
            });
        }
    
      //EditType
    $scope.editType = function (_id) {
            $index = $scope.getIndex(_id);
            var id = $scope.DessertsItem[$index]._id;
            var data = {
                type: $scope.DessertsItem[$index].typeTemp
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
        var upvote = $scope.DessertsItem[$index].upVoted;
        upvote++;
        var data = {
            upVoted: upvote
        }
        todoReq.upVoted(_id, data).then($scope.loadData)

    }


    //downVoted
    $scope.unlike = function (_id) {
        $index = $scope.getIndex(_id);
        var id = $scope.DessertsItem[$index]._id;
        var downvote = $scope.DessertsItem[$index].downVoted;
        downvote++;
        var data = {
            downVoted: downvote
        }
        todoReq.downVoted(id, data).then($scope.loadData)
    }

    //Show/Hide Edit
    $scope.editShowing = function (_id) {
        index = $scope.getIndex(_id);
        $scope.DessertsItem[index].isShowingEdit = !$scope.DessertsItem[index].isShowingEdit;
       
    }

    //Show/Hide Comment
    $scope.showHideComment = function (_id) {
            index = $scope.getIndex(_id);
            $scope.DessertsItem[index].isShowingComment = !$scope.DessertsItem[index].isShowingComment;
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
        $scope.DessertsItem[index].isShowingAddComment = !$scope.DessertsItem[index].isShowingAddComment;
    }

    //addcomment
    $scope.addComment = function (id, comment) {
        var data = {
            Comment: comment
        }
        todoReq.Comment(id, data).then($scope.loadData);
    }
});