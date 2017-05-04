var app = angular.module("app.Hotels", ["ngRoute", "todoReqModule", "privModule", "tokenModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Hotel", {
        templateUrl: "/js/Views/Hotels/Hotels.html",
        controller: "HotelsCtrl"
    })
})


app.controller("HotelsCtrl", function ($scope, todoReq, TokenService, privService) {
    $scope.HotelsItem = [];
    $scope.priv = privService.getPriv();
    $scope.sort = function (item) {
        return item.upVoted - item.downVoted;
    }
    $scope.getIndex = function (_id) {
        for (var i = 0; i < $scope.HotelsItem.length; i++) {
            if ($scope.HotelsItem[i]._id == _id) {
                return i;
            }
        }
        return -1;
    }
    $scope.loadData = function () {
        todoReq.gethotel().then(function (response) {
            $scope.HotelsItem = [];
            var dataGet = response.data.data;
            for (var i = 0; i < dataGet.length; i++) {
                $scope.HotelsItem.push({
                    _id: dataGet[i]._id,
                    image: dataGet[i].image,
                    name: dataGet[i].name,
                    description: dataGet[i].description,
                    upVoted: dataGet[i].upVoted || 0,
                    downVoted: dataGet[i].downVoted || 0,
                    Comment: dataGet[i].Comment,
                    Season: dataGet[i].Season,
                    price: dataGet[i].price,
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


    //Edit
    $scope.editHotel = function (_id) {
        $index = $scope.getIndex(_id);
        var id = $scope.HotelsItem[$index]._id;
        var data = {
            name: $scope.HotelsItem[$index].name,
            image: $scope.HotelsItem[$index].image,
            description: $scope.HotelsItem[$index].description,
            price: $scope.HotelsItem[$index].price,
            SeasonTemp: $scope.HotelsItem[$index].SeasonTemp
        };
        todoReq.edithotel(id, data).then(function () {
            $scope.loadData();
            $scope.HotelsItem[$index].Season = $scope.HotelsItem[$index].SeasonTemp;
        }, function (error) {
            console.log(error.status);
        });
    }

    //EditType
    $scope.editSeason = function (_id) {
        $index = $scope.getIndex(_id);
        var id = $scope.HotelsItem[$index]._id;
        var data = {
            Season: $scope.HotelsItem[$index].SeasonTemp
        };
        todoReq.edithotel(id, data).then(function () {
            $scope.loadData();
        }, function (error) {
            console.log(error.status);
        });
    }

    //Delete
    $scope.deletehotel = function (_id) {
            todoReq.deletehotel(_id).then($scope.loadData, function (error) {
                console.log(error.status);
            });
        }
        //upVoted
    $scope.like = function (_id) {
        $index = $scope.getIndex(_id);
        var upvote = $scope.HotelsItem[$index].upVoted;
        upvote++;
        var data = {
            upVoted: upvote
        }
        todoReq.upVotedhotel(_id, data).then($scope.loadData)
    }


    //downVoted
    $scope.unlike = function (_id) {
        $index = $scope.getIndex(_id);
        var id = $scope.HotelsItem[$index]._id;
        var downvote = $scope.HotelsItem[$index].downVoted;
        downvote++;
        var data = {
            downVoted: downvote
        }
        todoReq.downVotedhotel(id, data).then($scope.loadData)
    }

    //Show/Hide Edit
    $scope.editShowing = function (_id) {
        index = $scope.getIndex(_id);
        $scope.HotelsItem[index].isShowingEdit = !$scope.HotelsItem[index].isShowingEdit;

    }

    //Show/Hide Comment
    $scope.showHideComment = function (_id) {
            index = $scope.getIndex(_id);
            $scope.HotelsItem[index].isShowingComment = !$scope.HotelsItem[index].isShowingComment;
        }
        // Remove Specific Comment
    $scope.removeComment = function (id, index) {
            todoReq.deleteCommentInhotel(id, index).then($scope.loadData)
        }
        //Show/Hide addComment
    $scope.showHideAddComment = function (_id) {
        index = $scope.getIndex(_id);
        $scope.HotelsItem[index].isShowingAddComment = !$scope.HotelsItem[index].isShowingAddComment;
    }

    //addcomment
    $scope.addComment = function (id, comment) {
        var data = {
            Comment: comment
        }
        todoReq.Commenthotel(id, data).then($scope.loadData);
    }


    $scope.hotelOption = function () {
        $scope.FallHotel = true;

        $scope.ShowFallHotel = function () {
            $scope.FallHotel = true;
            $scope.SpringHotel = false;
            $scope.SummerHotel = false;
            $scope.WinterHotel = false;
        }
        $scope.ShowSpringHotel = function () {
            $scope.FallHotel = false;
            $scope.SpringHotel = true;
            $scope.SummerHotel = false;
            $scope.WinterHotel = false;
        }
        $scope.ShowSummerHotel = function () {
            $scope.FallHotel = false;
            $scope.SpringHotel = false;
            $scope.WinterHotel = false;
            $scope.SummerHotel = true;
        }
        $scope.ShowWinterHotel = function () {
            $scope.FallHotel = false;
            $scope.SpringHotel = false;
            $scope.SummerHotel = false;
            $scope.WinterHotel = true;
        }
    }
})