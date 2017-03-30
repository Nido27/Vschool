var app = angular.module("todoReqModule",[]);
app.service("todoReq", function ($http) {
    this.getData = function () {
        return $http.get("http://localhost:8080/Status");
    }
    
      this.getDataById = function (id) {
        return $http.get("http://localhost:8080/Status/"+id);
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
