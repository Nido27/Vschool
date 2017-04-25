var app = angular.module("todoReqModule", []);
app.service("todoReq", function ($http) {

    // Uer Part
    this.getUserById = function (id) {
        return $http.get("http://localhost:8080/User/" + id);
    }
    this.getUser = function () {
        return $http.get("http://localhost:8080/User/");
    }
    this.editUser = function (id, data) {
        var queryString = "";
        for (key in data) {
            if (data[key] != undefined) {
                queryString += key + "=" + data[key] + "&"
            }
        }
        return $http.put("http://localhost:8080/User/" + id + "?" + queryString);
    }
// offear part
    this.postOffear = function (data) {
        return $http.post("http://localhost:8080/offear/", data);
    }
    this.getoffearById = function (id) {
        return $http.get("http://localhost:8080/offear/" + id);
    }
    this.getoffear = function () {
        return $http.get("http://localhost:8080/offear");
    }

    this.deleteoffear = function (id) {
        return $http.delete("http://localhost:8080/offear/" + id);
    }
    this.deleteCommentInOffear = function (id, index) {
        return $http.delete("http://localhost:8080/offear/" + id + "/" + index);
    }
    this.editoffear = function (id, data) {
        var queryString = "";
        for (key in data) {
            if (data[key] != undefined) {
                queryString += key + "=" + data[key] + "&"
            }
        }
        return $http.put("http://localhost:8080/offear/" + id + "?" + queryString);
    }
      this.upVotedoffear = function (id, data) {
            var query = "";
            for (key in data) {
                query += key;
                query += "=";
                query += data[key];
                query += "&"
            }
            return $http.put("http://localhost:8080/offear/" + id + "?" + query);
        }
        this.downVotedoffear = function (id, data) {
            var query = "";
            for (key in data) {
                query += key;
                query += "=";
                query += data[key];
                query += "&"
            }
            return $http.put("http://localhost:8080/offear/" + id + "?" + query);
        }

        this.Commentoffear = function (id, data) {
            var stringComment = "";
            for (key in data) {
                stringComment += key;
                stringComment += "=";
                stringComment += data[key];
                stringComment += "&"
            }
            return $http.put("http://localhost:8080/offear/" + id + "?" + stringComment);
        }

        this.removeoffear = function (id) {
            return $http.delete("http://localhost:8080/offear/" + id);
        }
    /// hotel part
   this.posthotel = function (data) {
        return $http.post("http://localhost:8080/hotel/", data);
    }
    this.gethotelrById = function (id) {
        return $http.get("http://localhost:8080/hotel/" + id);
    }
    this.gethotel = function () {
        return $http.get("http://localhost:8080/hotel");
    }

    this.deletehotel = function (id) {
        return $http.delete("http://localhost:8080/hotel/" + id);
    }
    this.deleteCommentInhotel = function (id, index) {
        return $http.delete("http://localhost:8080/hotel/" + id + "/" + index);
    }
    this.edithotel = function (id, data) {
        var queryString = "";
        for (key in data) {
            if (data[key] != undefined) {
                queryString += key + "=" + data[key] + "&"
            }
        }
        return $http.put("http://localhost:8080/hotel/" + id + "?" + queryString);
    }
        this.upVotedhotel = function (id, data) {
            var query = "";
            for (key in data) {
                query += key;
                query += "=";
                query += data[key];
                query += "&"
            }
            return $http.put("http://localhost:8080/hotel/" + id + "?" + query);
        }
        this.downVotedhotel = function (id, data) {
            var query = "";
            for (key in data) {
                query += key;
                query += "=";
                query += data[key];
                query += "&"
            }
            return $http.put("http://localhost:8080/hotel/" + id + "?" + query);
        }

        this.Commenthotel = function (id, data) {
            var stringComment = "";
            for (key in data) {
                stringComment += key;
                stringComment += "=";
                stringComment += data[key];
                stringComment += "&"
            }
            return $http.put("http://localhost:8080/hotel/" + id + "?" + stringComment);
        }


        this.removeCommenthotel = function (id) {
            return $http.delete("http://localhost:8080/hotel/" + id);
        }
});