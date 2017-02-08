var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.storage = {
        list: [{
                name: "haitham",
                age: 44,
                killed: ["hiba", "luna", "jacob"]
    },
            {
                name: "jammel",
                age: 14,
                killed: ["zzz", "kkk", "xxx"]
    },
            {
                name: "nader",
                age: 24,
                killed: ["issam", "ahmad", "omar"]
    }]
    }
});