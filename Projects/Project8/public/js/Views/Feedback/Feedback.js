var app = angular.module("app.Feedback", ["ngRoute", "todoReqModule", "privModule", "tokenModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Feedback", {
        templateUrl: "/js/Views/Feedback/Feedback.html",
        controller: "FeedbackCtrl"
    })
})


app.controller("FeedbackCtrl", function ($scope, todoReq, $location, privService, IdService) {

//  //add Feedback
//   $scope.addFeedBack = function () {
//        $scope.id = IdService.getId()
//        todoReq.feedback($scope.id, $scope.FeedBack).then();
//       $scope.FeedBack="";
//    }


})