var app = angular.module("getApi", []);
app.service("todoReq", function ($http) {
    this.getData = function () {
        return $http.get("http://api.vschool.io/NaderElSalhat/todo/");
    }
    this.delete = function (id) {
        return $http.delete("http://api.vschool.io/NaderElSalhat/todo/"+id);
    }
    this.add = function (data) {
        return $http.post("http://api.vschool.io/NaderElSalhat/todo/", data);
    }
})