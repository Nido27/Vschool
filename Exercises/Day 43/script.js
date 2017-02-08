
var myapp = angular.module("MyApp", []);
myapp.controller("mainController", function($scope) {
   $scope.arr=[];   
    $scope.pictures=[];
    $scope.submitted= false;
   $scope.submit = function() {
       $scope.submitted=true;
     $scope.arr.push({
         first: $scope.first,
         description: $scope.description,
         image:$scope.picture 
     });  
  
         $scope.first="";
       $scope.description="";
       $scope.picture="";
   }
   
});
//https://s-media-cache-ak0.pinimg.com/736x/e6/31/43/e63143dd3fb1e08cd4bdd04bd13fa6f2.jpg