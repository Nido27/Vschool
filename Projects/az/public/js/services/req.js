var app = angular.module("requestsModule", []);

app.service("reqService", function($http) {
  this.get = function() {
    return $http.get("http://localhost:8080/api");
  };
  this.post = function(data) {
    return $http.post("http://localhost:8080/api", data);
  };
  this.put = function(id, data) {
    var query = "?";
    for(key in data) {
      query += key + "=" + data[key] + "&";
    }
    return $http.put("http://localhost:8080/api/" + id + query);
  };
  this.delete = function(id) {
    return $http.delete("http://localhost:8080/api/" + id);
  };
});
