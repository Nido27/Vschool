var app = angular.module("app.Summer", ["ngRoute", "todoReqModule", "privModule" ,"tokenModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Summer", {
        templateUrl: "/js/Views/Season/Summer/Summer.html",
        controller: "SummerCtrl"
    })
})


app.controller("SummerCtrl", function ($scope, todoReq, TokenService, privService) {
    
   $scope.SummerItem = [];
     $scope.priv = privService.getPriv();
    $scope.sort = function (item) {
        return item.upVoted - item.downVoted;
    }
    $scope.getIndex = function (_id) {
        for (var i = 0; i < $scope.SummerItem.length; i++) {
            if ($scope.SummerItem[i]._id == _id) {
                return i;
            }
        }
        return -1;
    }
    $scope.loadData = function () {
        todoReq.getoffear().then(function (response) {
            $scope.SummerItem = [];
            var dataGet = response.data.data;
            for (var i = 0; i < dataGet.length; i++) {
                $scope.SummerItem.push({
                     _id: dataGet[i]._id,
                    image: dataGet[i].image,
                    name: dataGet[i].name,
                    description: dataGet[i].description,
                    upVoted: dataGet[i].upVoted || 0,
                    downVoted: dataGet[i].downVoted || 0,
                    Comment: dataGet[i].Comment,
                    Season: dataGet[i].Season,
                    price:dataGet[i].price,
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


    //Edit
    $scope.editoffear = function (_id) {
            $index = $scope.getIndex(_id);
            var id = $scope.SummerItem[$index]._id;
            var data = {
                name: $scope.SummerItem[$index].name,
                image: $scope.SummerItem[$index].image,
                description: $scope.SummerItem[$index].description,
                price: $scope.SummerItem[$index].price,
                SeasonTemp: $scope.SummerItem[$index].SeasonTemp
            };
            todoReq.editoffear(id, data).then(function () {
                $scope.loadData();
                $scope.SummerItem[$index].Season = $scope.SummerItem[$index].SeasonTemp;
            }, function (error) {
                console.log(error.status);
            });
        }
      
      //EditType
    $scope.editSeason = function (_id) {
            $index = $scope.getIndex(_id);
            var id = $scope.SummerItem[$index]._id;
            var data = {
                Season: $scope.SummerItem[$index].SeasonTemp
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
        var upvote = $scope.SummerItem[$index].upVoted;
        upvote++;
        var data = {
            upVoted: upvote
        }
        todoReq.upVotedoffear(_id, data).then($scope.loadData)
    }


    //downVoted
    $scope.unlike = function (_id) {
        $index = $scope.getIndex(_id);
        var id = $scope.SummerItem[$index]._id;
        var downvote = $scope.SummerItem[$index].downVoted;
        downvote++;
        var data = {
            downVoted: downvote
        }
        todoReq.downVotedoffear(id, data).then($scope.loadData)
    }

    //Show/Hide Edit
    $scope.editShowing = function (_id) {
        index = $scope.getIndex(_id);
        $scope.SummerItem[index].isShowingEdit = !$scope.SummerItem[index].isShowingEdit;

    }

    //Show/Hide Comment
    $scope.showHideComment = function (_id) {
            index = $scope.getIndex(_id);
            $scope.SummerItem[index].isShowingComment = !$scope.SummerItem[index].isShowingComment;
        }
        // Remove Specific Comment
    $scope.removeComment = function (id, index) {
            todoReq.deleteCommentInOffear(id, index).then($scope.loadData)
        }
        //Show/Hide addComment
    $scope.showHideAddComment = function (_id) {
        index = $scope.getIndex(_id);
        $scope.SummerItem[index].isShowingAddComment = !$scope.SummerItem[index].isShowingAddComment;
    }

    //addcomment
    $scope.addComment = function (id, comment) {
        var data = {
            Comment: comment
        }
        todoReq.Commentoffear(id, data).then($scope.loadData);
    }
})