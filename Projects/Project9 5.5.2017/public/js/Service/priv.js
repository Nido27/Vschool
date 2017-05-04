var app = angular.module("privModule", []);

app.service("privService", function() {
  this.setPriv = function(priv) {
    localStorage["priv"] = priv;
  };
  this.getPriv = function() {
    return localStorage["priv"];
  };
  this.removePriv = function() {
    localStorage.removeItem("priv");
  };
});


app.service("IdService", function() {
  this.setId = function(id) {
    localStorage["Id"] = id;
  };
  this.getId = function() {
    return localStorage["Id"];
  };
  this.removeId = function() {
    localStorage.removeItem("Id");
  };
});


app.service("UsernameService", function() {
  this.setUsername = function(Username) {
    localStorage["Username"] = Username;
  };
  this.getUsername = function() {
    return localStorage["Username"];
  };
  this.removeUsername = function() {
    localStorage.removeItem("Username");
  };
});