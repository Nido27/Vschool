var app = angular.module("app.Spring", ["ngRoute", "todoReqModule", "privModule", "tokenModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Spring", {
        templateUrl: "/js/Views/Season/Spring/Spring.html",
        controller: "SpringCtrl"
    })
})


app.controller("SpringCtrl", function ($scope, todoReq, TokenService, privService) {
    $scope.SpringItem = [];
     $scope.selectedItem = null;
    $scope.SpringItem = [];
    $scope.priv = privService.getPriv();
    $scope.sort = function (item) {
        return item.upVoted - item.downVoted;
    }
    $scope.getIndex = function (_id) {
        for (var i = 0; i < $scope.SpringItem.length; i++) {
            if ($scope.SpringItem[i]._id == _id) {
                return i;
            }
        }
        return -1;
    }
    $scope.loadData = function () {
        todoReq.getoffear().then(function (response) {
            $scope.SpringItem = [];
            var dataGet = response.data.data;
            for (var i = 0; i < dataGet.length; i++) {
                $scope.SpringItem.push({
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
        var id = $scope.SpringItem[$index]._id;
        var data = {
            name: $scope.SpringItem[$index].name,
            image: $scope.SpringItem[$index].image,
            description: $scope.SpringItem[$index].description,
            price: $scope.SpringItem[$index].price,
            SeasonTemp: $scope.SpringItem[$index].SeasonTemp,
                        location: $scope.FallItem[$index].location

        };
        todoReq.editoffear(id, data).then(function () {
            $scope.loadData();
            $scope.SpringItem[$index].Season = $scope.SpringItem[$index].SeasonTemp;
        }, function (error) {
            console.log(error.status);
        });
    }

    //EditType
    $scope.editSeason = function (_id) {
        $index = $scope.getIndex(_id);
        var id = $scope.SpringItem[$index]._id;
        var data = {
            Season: $scope.SpringItem[$index].SeasonTemp
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
        var upvote = $scope.SpringItem[$index].upVoted;
        upvote++;
        var data = {
            upVoted: upvote
        }
        todoReq.upVotedoffear(_id, data).then($scope.loadData)
    }


    //downVoted
    $scope.unlike = function (_id) {
        $index = $scope.getIndex(_id);
        var id = $scope.SpringItem[$index]._id;
        var downvote = $scope.SpringItem[$index].downVoted;
        downvote++;
        var data = {
            downVoted: downvote
        }
        todoReq.downVotedoffear(id, data).then($scope.loadData)
    }

    //Show/Hide Edit
    $scope.editShowing = function (_id) {
        index = $scope.getIndex(_id);
        $scope.SpringItem[index].isShowingEdit = !$scope.SpringItem[index].isShowingEdit;

    }

    //Show/Hide Comment
    $scope.showHideComment = function (_id) {
            index = $scope.getIndex(_id);
            $scope.SpringItem[index].isShowingComment = !$scope.SpringItem[index].isShowingComment;

        }
        // Remove Specific Comment
    $scope.removeComment = function (id, index) {
            todoReq.deleteCommentInOffear(id, index).then($scope.loadData)
        }
        //Show/Hide addComment
    $scope.showHideAddComment = function (_id) {
        index = $scope.getIndex(_id);
        $scope.SpringItem.isShowingAddComment = !$scope.SpringItem.isShowingAddComment;
    }

    //addcomment
    $scope.addComment = function (id, comment) {
        var data = {
            Comment: comment
        }
        todoReq.Commentoffear(id, data).then($scope.loadData);
    }
})