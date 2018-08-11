
angular.module("directiveApp")
    .controller("defaultCtrl", function ($scope) {
        $scope.todos = [
            { action: "Get groceries", complete: false },
            { action: "Call plumber", complete: false },
            { action: "Buy running shoes", complete: true },
            { action: "Buy flowers", complete: false },
            { action: "Call family", complete: false }
        ];

        $scope.viewFile = () => $scope.showTable? "./views/directives/table.html": "./views/directives/list.html";
        $scope.reportChange = () => console.log("Content changed: " + $scope.viewFile());

    });