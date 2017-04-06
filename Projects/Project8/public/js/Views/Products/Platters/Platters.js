var app = angular.module("app.Platters", ["ngRoute", "todoReqModule", "privModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Platters", {
        templateUrl: "/js/Views/Products/Platters/Platters.html",
        controller: "PlattersCtrl"
    })
})

app.controller("PlattersCtrl", function ($scope, todoReq, privService) {
    $scope.PlattersItem = [];
     $scope.priv = privService.getPriv();
    $scope.sort = function (item) {
        return item.upVoted - item.downVoted;
    }
    $scope.getIndex = function (_id) {
        for (var i = 0; i < $scope.PlattersItem.length; i++) {
            if ($scope.PlattersItem[i]._id == _id) {
                return i;
            }
        }
        return -1;
    }
    $scope.loadData = function () {
        todoReq.getData().then(function (response) {
            $scope.PlattersItem = [];
            var dataGet = response.data.data;
            for (var i = 0; i < dataGet.length; i++) {
                $scope.PlattersItem.push({
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
            var id = $scope.PlattersItem[$index]._id;
            var data = {
                name: $scope.PlattersItem[$index].name,
                image: $scope.PlattersItem[$index].image,
                description: $scope.PlattersItem[$index].description,
                typeTemp: $scope.PlattersItem[$index].typeTemp
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
            var id = $scope.PlattersItem[$index]._id;
            var data = {
                type: $scope.PlattersItem[$index].typeTemp
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
        var upvote = $scope.PlattersItem[$index].upVoted;
        upvote++;
        var data = {
            upVoted: upvote
        }
        todoReq.upVoted(_id, data).then($scope.loadData)

    }


    //downVoted
    $scope.unlike = function (_id) {
        $index = $scope.getIndex(_id);
        var id = $scope.PlattersItem[$index]._id;
        var downvote = $scope.PlattersItem[$index].downVoted;
        downvote++;
        var data = {
            downVoted: downvote
        }
        todoReq.downVoted(id, data).then($scope.loadData)
    }

    //Show/Hide Edit
    $scope.editShowing = function (_id) {
        index = $scope.getIndex(_id);
        $scope.PlattersItem[index].isShowingEdit = !$scope.PlattersItem[index].isShowingEdit;

    }

    //Show/Hide Comment
    $scope.showHideComment = function (_id) {
            index = $scope.getIndex(_id);
            $scope.PlattersItem[index].isShowingComment = !$scope.PlattersItem[index].isShowingComment;
        }
        // Remove Specific Comment
  $scope.removeComment = function (id, index) {
            todoReq.deleteComment(id, index).then($scope.loadData)
        }
        //Show/Hide addComment
    $scope.showHideAddComment = function (_id) {
        index = $scope.getIndex(_id);
        $scope.PlattersItem[index].isShowingAddComment = !$scope.PlattersItem[index].isShowingAddComment;
    }

    //addcomment
    $scope.addComment = function (id, comment) {
        var data = {
            Comment: comment
        }
        todoReq.Comment(id, data).then($scope.loadData);
    }
});