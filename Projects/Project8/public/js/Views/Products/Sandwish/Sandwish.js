var app = angular.module("app.Sandwish", ["ngRoute", "todoReqModule", "privModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Sandwish", {
        templateUrl: "/js/Views/Products/Sandwish/Sandwish.html",
        controller: "SandwishCtrl"
    })
})

app.controller("SandwishCtrl", function ($scope, todoReq, privService) {
    $scope.SandwishItem = [];
     $scope.priv = privService.getPriv();
    $scope.sort = function (item) {
        return item.upVoted - item.downVoted;
    }
    $scope.getIndex = function (_id) {
        for (var i = 0; i < $scope.SandwishItem.length; i++) {
            if ($scope.SandwishItem[i]._id == _id) {
                return i;
            }
        }
        return -1;
    }
    $scope.loadData = function () {
        todoReq.getData().then(function (response) {
            $scope.SandwishItem = [];
            var dataGet = response.data.data;
            for (var i = 0; i < dataGet.length; i++) {
                $scope.SandwishItem.push({
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
            var id = $scope.SandwishItem[$index]._id;
            var data = {
                name: $scope.SandwishItem[$index].name,
                image: $scope.SandwishItem[$index].image,
                description: $scope.SandwishItem[$index].description,
                typeTemp: $scope.SandwishItem[$index].typeTemp
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
            var id = $scope.SandwishItem[$index]._id;
            var data = {
                type: $scope.SandwishItem[$index].typeTemp
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
        var upvote = $scope.SandwishItem[$index].upVoted;
        upvote++;
        var data = {
            upVoted: upvote
        }
        todoReq.upVoted(_id, data).then($scope.loadData)

    }


    //downVoted
    $scope.unlike = function (_id) {
        $index = $scope.getIndex(_id);
        var id = $scope.SandwishItem[$index]._id;
        var downvote = $scope.SandwishItem[$index].downVoted;
        downvote++;
        var data = {
            downVoted: downvote
        }
        todoReq.downVoted(id, data).then($scope.loadData)
    }

    //Show/Hide Edit
    $scope.editShowing = function (_id) {
        index = $scope.getIndex(_id);
        $scope.SandwishItem[index].isShowingEdit = !$scope.SandwishItem[index].isShowingEdit;

    }

    //Show/Hide Comment
    $scope.showHideComment = function (_id) {
            index = $scope.getIndex(_id);
            $scope.SandwishItem[index].isShowingComment = !$scope.SandwishItem[index].isShowingComment;
        }
        // Remove Specific Comment
  $scope.removeComment = function (id, index) {
            todoReq.deleteComment(id, index).then($scope.loadData)
        }
        //Show/Hide addComment
    $scope.showHideAddComment = function (_id) {
        index = $scope.getIndex(_id);
        $scope.SandwishItem[index].isShowingAddComment = !$scope.SandwishItem[index].isShowingAddComment;
    }

    //addcomment
    $scope.addComment = function (id, comment) {
        var data = {
            Comment: comment
        }
        todoReq.Comment(id, data).then($scope.loadData);
    }
});