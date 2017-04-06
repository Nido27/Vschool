var app = angular.module("todoReqModule", []);
app.service("todoReq", function ($http) {
    this.getData = function () {
        return $http.get("http://localhost:8080/restoMenu");
    }
    this.getDataById = function (id) {
        return $http.get("http://localhost:8080/restoMenu/" + id);
    }

    this.postData = function (data) {
        return $http.post("http://localhost:8080/restoMenu/", data);
    }
    this.deleteData = function (id) {
        return $http.delete("http://localhost:8080/restoMenu/" + id);
    }
    this.deleteComment = function (id, index) {
        return $http.delete("http://localhost:8080/restoMenu/" + id + "/" + index);
    }
    this.editData = function (id, data) {
        var queryString = "";
        for (key in data) {
            if (data[key] != undefined) {
                queryString += key + "=" + data[key] + "&"
            }
        }
        return $http.put("http://localhost:8080/restoMenu/" + id + "?" + queryString);
    }
     
    this.upVoted = function (id, data) {
        var query = "";
        for (key in data) {
            query += key;
            query += "=";
            query += data[key];
            query += "&"
        }
        return $http.put("http://localhost:8080/restoMenu/" + id + "?" + query);
    }
    this.downVoted = function (id, data) {
        var query = "";
        for (key in data) {
            query += key;
            query += "=";
            query += data[key];
            query += "&"
        }
        return $http.put("http://localhost:8080/restoMenu/" + id + "?" + query);
    }

    this.Comment = function (id, data) {
        var stringComment = "";
        for (key in data) {
            stringComment += key;
            stringComment += "=";
            stringComment += data[key];
            stringComment += "&"
        }
        return $http.put("http://localhost:8080/restoMenu/" + id + "?" + stringComment);
    }

    this.removeComment = function (id) {
        return $http.delete("http://localhost:8080/restoMenu/" + id);
    }
});
