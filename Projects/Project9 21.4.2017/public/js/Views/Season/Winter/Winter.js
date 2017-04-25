var app = angular.module("app.Winter", ["ngRoute", "todoReqModule", "privModule" ,"tokenModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Winter", {
        templateUrl: "/js/Views/Season/Winter/Winter.html",
        controller: "WinterCtrl"
    })
})


app.controller("WinterCtrl", function ($scope, todoReq, TokenService, privService) {
   $scope.WinterItem = [];
     $scope.priv = privService.getPriv();
    $scope.sort = function (item) {
        return item.upVoted - item.downVoted;
    }
    $scope.getIndex = function (_id) {
        for (var i = 0; i < $scope.WinterItem.length; i++) {
            if ($scope.WinterItem[i]._id == _id) {
                return i;
            }
        }
        return -1;
    }
    $scope.loadData = function () {
        todoReq.getoffear().then(function (response) {
            $scope.WinterItem = [];
            var dataGet = response.data.data;
            for (var i = 0; i < dataGet.length; i++) {
                $scope.WinterItem.push({
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
            var id = $scope.WinterItem[$index]._id;
            var data = {
                name: $scope.WinterItem[$index].name,
                image: $scope.WinterItem[$index].image,
                description: $scope.WinterItem[$index].description,
                price: $scope.WinterItem[$index].price,
                SeasonTemp: $scope.WinterItem[$index].SeasonTemp
            };
            todoReq.editoffear(id, data).then(function () {
                $scope.loadData();
                $scope.WinterItem[$index].Season = $scope.WinterItem[$index].SeasonTemp;
            }, function (error) {
                console.log(error.status);
            });
        }
      
      //EditType
    $scope.editSeason = function (_id) {
            $index = $scope.getIndex(_id);
            var id = $scope.WinterItem[$index]._id;
            var data = {
                Season: $scope.WinterItem[$index].SeasonTemp
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
        var upvote = $scope.WinterItem[$index].upVoted;
        upvote++;
        var data = {
            upVoted: upvote
        }
        todoReq.upVotedoffear(_id, data).then($scope.loadData)
    }


    //downVoted
    $scope.unlike = function (_id) {
        $index = $scope.getIndex(_id);
        var id = $scope.WinterItem[$index]._id;
        var downvote = $scope.WinterItem[$index].downVoted;
        downvote++;
        var data = {
            downVoted: downvote
        }
        todoReq.downVotedoffear(id, data).then($scope.loadData)
    }

    //Show/Hide Edit
    $scope.editShowing = function (_id) {
        index = $scope.getIndex(_id);
        $scope.WinterItem[index].isShowingEdit = !$scope.WinterItem[index].isShowingEdit;

    }

    //Show/Hide Comment
    $scope.showHideComment = function (_id) {
            index = $scope.getIndex(_id);
            $scope.WinterItem[index].isShowingComment = !$scope.WinterItem[index].isShowingComment;
        }
        // Remove Specific Comment
    $scope.removeComment = function (id, index) {
            todoReq.deleteCommentInOffear(id, index).then($scope.loadData)
        }
        //Show/Hide addComment
    $scope.showHideAddComment = function (_id) {
        index = $scope.getIndex(_id);
        $scope.WinterItem[index].isShowingAddComment = !$scope.WinterItem[index].isShowingAddComment;
    }

    //addcomment
    $scope.addComment = function (id, comment) {
        var data = {
            Comment: comment
        }
        todoReq.Commentoffear(id, data).then($scope.loadData);
    }
    
})