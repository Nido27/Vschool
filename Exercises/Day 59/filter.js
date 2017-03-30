var app = angular.module("myNewApp", []);
app.filter("search", function () {
    return function (input, term,age) {
        var result = [];
        for (var i = 0; i < input.length; i++) {
            if (input[i].name.indexOf(term) != -1 && input[i].age == age) {
                result.push(input[i])
            }
        }
        return result;
    }
})
app.controller("myController", function ($scope) {
    $scope.list = [{
            name: "aziz",
            age: 22,
    },
        {
            name: "ahmed",
            age: 21,
    },
        {
            name: "omar",
            age: 26,
    },
        {
            name: "jaffer",
            age: 31,
    },
        {
            name: "fli",
            age: 41,
    }];
});