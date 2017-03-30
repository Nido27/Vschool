var app = angular.module("picApp", []);

app.service("catA", function() {
  this.likes = 0;
  this.addLike = function() {
    this.likes++;
  }
});

app.service("catB", function() {
  this.likes = 0;
  this.addLike = function() {
    this.likes++;
  }
});

app.controller("ctrl", function($scope, catA, catB) {
  $scope.likesA = catA.likes;
  $scope.likesB = catB.likes;
  $scope.likeCatA = function() {
    catA.addLike();
    $scope.likesA = catA.likes;
  }
    $scope.likeCatB = function() {
    catB.addLike();
    $scope.likesB = catB.likes;
  }
});