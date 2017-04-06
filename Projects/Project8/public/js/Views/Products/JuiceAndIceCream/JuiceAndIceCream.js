var app = angular.module("app.JuiceAndIceCream", ["ngRoute", "todoReqModule", "privModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/JuiceAndIceCream", {
        templateUrl: "/js/Views/Products/JuiceAndIceCream/JuiceAndIceCream.html",
        controller: "JuiceAndIceCreamCtrl"
    })
})

app.controller("JuiceAndIceCreamCtrl", function ($scope, todoReq, privService) {
       $scope.juiceAndIceCreamItem = [];
     $scope.priv = privService.getPriv();
    $scope.sort = function (item) {
        return item.upVoted - item.downVoted;
    }
    $scope.getIndex = function (_id) {
        for (var i = 0; i < $scope.juiceAndIceCreamItem.length; i++) {
            if ($scope.juiceAndIceCreamItem[i]._id == _id) {
                return i;
            }
        }
        return -1;
    }
    $scope.loadData = function () {
        todoReq.getData().then(function (response) {
            $scope.juiceAndIceCreamItem = [];
            var dataGet = response.data.data;
            for (var i = 0; i < dataGet.length; i++) {
                $scope.juiceAndIceCreamItem.push({
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
            var id = $scope.juiceAndIceCreamItem[$index]._id;
            var data = {
                name: $scope.juiceAndIceCreamItem[$index].name,
                image: $scope.juiceAndIceCreamItem[$index].image,
                description: $scope.juiceAndIceCreamItem[$index].description,
                typeTemp: $scope.juiceAndIceCreamItem[$index].typeTemp
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
            var id = $scope.juiceAndIceCreamItem[$index]._id;
            var data = {
                type: $scope.juiceAndIceCreamItem[$index].typeTemp
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
        var upvote = $scope.juiceAndIceCreamItem[$index].upVoted;
        upvote++;
        var data = {
            upVoted: upvote
        }
        todoReq.upVoted(_id, data).then($scope.loadData)

    }


    //downVoted
    $scope.unlike = function (_id) {
        $index = $scope.getIndex(_id);
        var id = $scope.juiceAndIceCreamItem[$index]._id;
        var downvote = $scope.juiceAndIceCreamItem[$index].downVoted;
        downvote++;
        var data = {
            downVoted: downvote
        }
        todoReq.downVoted(id, data).then($scope.loadData)
    }

    //Show/Hide Edit
    $scope.editShowing = function (_id) {
        index = $scope.getIndex(_id);
        $scope.juiceAndIceCreamItem[index].isShowingEdit = !$scope.juiceAndIceCreamItem[index].isShowingEdit;
       
    }

    //Show/Hide Comment
    $scope.showHideComment = function (_id) {
            index = $scope.getIndex(_id);
            $scope.juiceAndIceCreamItem[index].isShowingComment = !$scope.juiceAndIceCreamItem[index].isShowingComment;
        }
        // Remove Specific Comment
$scope.removeComment = function (id, index) {
            todoReq.deleteComment(id, index).then($scope.loadData)
        }
        //Show/Hide addComment
    $scope.showHideAddComment = function (_id) {
        index = $scope.getIndex(_id);
        $scope.juiceAndIceCreamItem[index].isShowingAddComment = !$scope.juiceAndIceCreamItem[index].isShowingAddComment;
    }

    //addcomment
    $scope.addComment = function (id, comment) {
        var data = {
            Comment: comment
        }
        todoReq.Comment(id, data).then($scope.loadData);
    }
});