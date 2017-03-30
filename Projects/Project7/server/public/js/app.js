var app = angular.module("myApp", []);
app.service("todoReq", function ($http) {
    this.getData = function () {
        return $http.get("http://localhost:8080/Status");
    }
    this.postData = function (data) {
        return $http.post("http://localhost:8080/Status/", data);
    }
    this.deleteData = function (id) {
        return $http.delete("http://localhost:8080/Status/" + id);
    }
    this.deleteComment = function (id, data) {
        var query = "";
        for (key in data) {
            query += key;
            query += "=";
            query += data[key];
            query += "&"
        }
        return $http.delete("http://localhost:8080/Status/" + id + "?" + query);
    }
    this.editData = function (id, data) {
        var queryString = "";
        for (key in data) {
            if (data[key] != undefined) {
                queryString += key + "=" + data[key] + "&"
            }
        }
        return $http.put("http://localhost:8080/Status/" + id + "?" + queryString);
    }
    this.upVoted = function (id, data) {
        var query = "";
        for (key in data) {
            query += key;
            query += "=";
            query += data[key];
            query += "&"
        }
        return $http.put("http://localhost:8080/Status/" + id + "?" + query);
    }
    this.downVoted = function (id, data) {
        var query = "";
        for (key in data) {
            query += key;
            query += "=";
            query += data[key];
            query += "&"
        }
        return $http.put("http://localhost:8080/Status/" + id + "?" + query);
    }

    this.Comment = function (id, data) {
        var stringComment = "";
        for (key in data) {
            stringComment += key;
            stringComment += "=";
            stringComment += data[key];
            stringComment += "&"
        }
        return $http.put("http://localhost:8080/Status/" + id + "?" + stringComment);
    }

    this.removeComment = function (id) {
        return $http.delete("http://localhost:8080/Status/" + id);
    }
});
app.controller("myCtrl", function ($scope, todoReq) {
    $scope.timeLine = [];
    $scope.sort = function(item) {
        return item.upVoted - item.downVoted;
    }
    $scope.getIndex = function (_id) {
        for (var i = 0; i < $scope.timeLine.length; i++) {
            if ($scope.timeLine[i]._id == _id) {
                return i;
            }
        }
        return -1;
    }
    $scope.loadData = function () {
        todoReq.getData().then(function (response) {
            $scope.timeLine = [];
            //            $scope.timeLine = response.data.data;
            var dataGet = response.data.data;
            for (var i = 0; i < dataGet.length; i++) {
                $scope.timeLine.push({
                    _id: dataGet[i]._id,
                    title: dataGet[i].title,
                    description: dataGet[i].description,
                    upVoted: dataGet[i].upVoted || 0,
                    downVoted: dataGet[i].downVoted || 0,
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
    //show/hide Post
    $scope.addStatus = function () {
            $scope.showStatus = !$scope.showStatus;
        }
        //Post
    $scope.add = function () {
        var data = {
            title: $scope.title,
            description: $scope.description,
            upVoted: $scope.upVoted || 0,
            downVoted: $scope.downVoted || 0,
            Comment: $scope.Comment
        }
        todoReq.postData(data).then($scope.loadData, function (error) {
            console.log(error.status);
        });
        $scope.title = "";
        $scope.description = "";
    }

    //Edit
    $scope.edit = function (_id) {
            $index = $scope.getIndex(_id);
            var id = $scope.timeLine[$index]._id;
            var data = {
                title: $scope.timeLine[$index].title,
                description: $scope.timeLine[$index].description
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
        var upvote = $scope.timeLine[$index].upVoted;
        upvote++;
        var data = {
            upVoted: upvote
        }
        todoReq.upVoted(_id, data).then($scope.loadData)

    }


    //downVoted
    $scope.unlike = function (_id) {
        $index = $scope.getIndex(_id);
        var id = $scope.timeLine[$index]._id;
        var downvote = $scope.timeLine[$index].downVoted;
        downvote++;
        var data = {
            downVoted: downvote
        }
        todoReq.downVoted(id, data).then($scope.loadData)
    }

    //addcomment
    $scope.addComment = function (id, comment) {
            var data = {
                Comment: comment
            }
            todoReq.Comment(id, data).then($scope.loadData);
        }
        //Show/Hide addComment
    $scope.showHideAddComment = function (_id) {
         index = $scope.getIndex(_id);
          $scope.timeLine[index].isShowingAddComment = !$scope.timeLine[index].isShowingAddComment;
        }
        //Show/Hide Edit
    $scope.editStatus = function (_id) {
        index = $scope.getIndex(_id);
        $scope.timeLine[index].isShowingEdit = !$scope.timeLine[index].isShowingEdit;
    }

    //Show/Hide Comment
    $scope.showHideComment = function (_id) {
        index = $scope.getIndex(_id);
            $scope.timeLine[index].isShowingComment = !$scope.timeLine[index].isShowingComment;
        }
        // Remove specfic Comment
        // Remove Specific Comment
    $scope.removeComment = function (id, index) {
        var data = {
            index: index
        }
        todoReq.deleteComment(id, data).then($scope.loadData)
    }
});