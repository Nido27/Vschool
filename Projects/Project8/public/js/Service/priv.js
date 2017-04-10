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
