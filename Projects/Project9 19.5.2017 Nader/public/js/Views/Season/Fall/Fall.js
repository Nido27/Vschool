var app = angular.module("app.Fall", ["ngRoute", "todoReqModule", "privModule", "tokenModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Fall", {
        templateUrl: "/js/Views/Season/Fall/Fall.html",
        controller: "FallCtrl"
    })
})


app.controller("FallCtrl", function ($scope, todoReq, TokenService, privService) {
    $scope.selectedItem = null;
    $scope.FallItem = [];
    $scope.priv = privService.getPriv();
    $scope.sort = function (item) {
        return item.upVoted - item.downVoted;
    }
    $scope.getIndex = function (_id) {
        for (var i = 0; i < $scope.FallItem.length; i++) {
            if ($scope.FallItem[i]._id == _id) {
                return i;
            }
        }
        return -1;
    }
    $scope.loadData = function () {
        todoReq.getoffear().then(function (response) {
            $scope.FallItem = [];
            var dataGet = response.data.data;
            for (var i = 0; i < dataGet.length; i++) {
                $scope.FallItem.push({
                    _id: dataGet[i]._id,
                    image: dataGet[i].image,
                    name: dataGet[i].name,
                    description: dataGet[i].description,
                    upVoted: dataGet[i].upVoted || 0,
                    downVoted: dataGet[i].downVoted || 0,
                    Comment: dataGet[i].Comment,
                    Season: dataGet[i].Season,
                    price: dataGet[i].price,
                    location: dataGet[i].location,
                    isShowingComment: false,
                    isShowingAddComment: false,
                    isShowingEdit: false,
                    SeasonTemp: dataGet[i].Season
                })
            }
        }, function (response) {
            console.log(response.status);
        })
    };


    $scope.selectItem = function (item) {
        $scope.selectedItem = item;
    }

    //Edit
    $scope.editoffear = function (_id) {
        $index = $scope.getIndex(_id);
        var id = $scope.FallItem[$index]._id;
        var data = {
            name: $scope.FallItem[$index].name,
            image: $scope.FallItem[$index].image,
            description: $scope.FallItem[$index].description,
            price: $scope.FallItem[$index].price,
            SeasonTemp: $scope.FallItem[$index].SeasonTemp,
            location: $scope.FallItem[$index].location
        };
        todoReq.editoffear(id, data).then(function () {
            $scope.loadData();
            $scope.FallItem[$index].Season = $scope.FallItem[$index].SeasonTemp;
        }, function (error) {
            console.log(error.status);
        });
    }

    //EditType
    $scope.editSeason = function (_id) {
        $index = $scope.getIndex(_id);
        var id = $scope.FallItem[$index]._id;
        var data = {
            Season: $scope.FallItem[$index].SeasonTemp
        };
        todoReq.editoffear(id, data).then(function () {
            $scope.loadData();
        }, function (error) {
            console.log(error.status);
        });
    }

    //Delete
    $scope.deleteoffear = function (_id) {
            todoReq.deleteoffear(_id).then($scope.loadData, function (error) {
                console.log(error.status);
            });
        }
        //upVoted
    $scope.like = function (_id) {
        $index = $scope.getIndex(_id);
        var upvote = $scope.FallItem[$index].upVoted;
        upvote++;
        var data = {
            upVoted: upvote
        }
        todoReq.upVotedoffear(_id, data).then($scope.loadData)
    }


    //downVoted
    $scope.unlike = function (_id) {
        $index = $scope.getIndex(_id);
        var id = $scope.FallItem[$index]._id;
        var downvote = $scope.FallItem[$index].downVoted;
        downvote++;
        var data = {
            downVoted: downvote
        }
        todoReq.downVotedoffear(id, data).then($scope.loadData)
    }

    //Show/Hide Edit
    $scope.editShowing = function (_id) {
        index = $scope.getIndex(_id);
        $scope.FallItem[index].isShowingEdit = !$scope.FallItem[index].isShowingEdit;

    }

    //Show/Hide Comment
    $scope.showHideComment = function (_id) {
            index = $scope.getIndex(_id);
            $scope.FallItem[index].isShowingComment = !$scope.FallItem[index].isShowingComment;

        }
        // Remove Specific Comment
    $scope.removeComment = function (id, index) {
            todoReq.deleteCommentInOffear(id, index).then($scope.loadData)
        }
        //Show/Hide addComment
    $scope.showHideAddComment = function (_id) {
        index = $scope.getIndex(_id);
        $scope.FallItem.isShowingAddComment = !$scope.FallItem.isShowingAddComment;
    }

    //addcomment
    $scope.addComment = function (id, comment) {
        var data = {
            Comment: comment
        }
        todoReq.Commentoffear(id, data).then($scope.loadData);
    }


})