var app = angular.module("app.User", ["ngRoute", "todoReqModule", "privModule", "tokenModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/User/:id", {
        templateUrl: "/js/Views/UserById/UserById.html",
        controller: "UserByIdCtrl"
    })
})

app.controller("UserByIdCtrl", function ($scope, $routeParams, todoReq, IdService) {
    var UserById = IdService.getId();
    $scope.loadUserById = function () {
        todoReq.getUserById(UserById).then(function (response) {
            var dataGet = response.data.data;
            $scope.item = dataGet;
            $scope.item = {
                _id: dataGet._id,
                image: dataGet.image,
                firstName: dataGet.firstName,
                lastName: dataGet.lastName,
                Email: dataGet.Email,
                Username: dataGet.Username,
                Password: dataGet.Password,
                Gender: dataGet.Gender,
                phone:dataGet.phone,
                age: new Date(dataGet.age),
                Country: dataGet.Country,
                ShowingImage: false,
                ShowingFirstName: false,
                ShowingLastName: false,
                ShowingUsername: false,
                ShowingPassword: false,
                ShowingGender: false,
                ShowingAge: false,
                ShowingCountry: false,
                Showingphone: false,
            }
        }, function (response) {
            console.log(response.status);
        })
    };
    //Edit
    $scope.editUser = function (UserById) {
        var data = {
            image: $scope.item.image,
            firstName: $scope.item.firstName,
            lastName: $scope.item.lastName,
            Email: $scope.item.Email,
            Username: $scope.item.Username,
            Gender: $scope.item.Gender,
            age: $scope.item.age,
            Country: $scope.item.Country,
            phone: $scope.item.phone,
        };
        todoReq.editUser(UserById, data).then(function () {
            $scope.loadUserById();
        }, function (error) {
            console.log(error.status);
        });
    }


    //Edit Password 
    $scope.editSavePassword = function (UserById) {
        var data = {
            Password: $scope.item.Password2
        };
        todoReq.editUserPassword(UserById, data).then(function () {
            $scope.loadUserById();
        }, function (error) {
            console.log(error.status);
        });
    }

    //Show Edit part
    $scope.editIamge = function () {
        $scope.item.ShowingImage = !$scope.item.ShowingImage;
    }

    $scope.editFirstName = function () {
        $scope.item.ShowingFirstName = !$scope.item.ShowingFirstName;
    }
    $scope.editLastName = function () {
        $scope.item.ShowingLastName = !$scope.item.ShowingLastName;
    }
    $scope.editUsername = function () {
        $scope.item.ShowingUsername = !$scope.item.ShowingUsername;
    }

    $scope.editEmail = function () {
        $scope.item.ShowingEmail = !$scope.item.ShowingEmail;
    }
    $scope.editPassword = function () {
        $scope.item.ShowingPassword = !$scope.item.ShowingPassword;
    }
    $scope.editGender = function () {
        $scope.item.ShowingGender = !$scope.item.ShowingGender;
    }
    $scope.editAge = function () {
        $scope.item.ShowingAge = !$scope.item.ShowingAge;
    }
    $scope.editCountry = function () {
        $scope.item.ShowingCountry = !$scope.item.ShowingCountry;
    }
     $scope.editphone = function () {
        $scope.item.Showingphone = !$scope.item.Showingphone;
    }



})