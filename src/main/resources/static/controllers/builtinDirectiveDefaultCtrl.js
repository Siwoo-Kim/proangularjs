
angular.module("builtinDirectiveApp")
    .controller("defaultCtrl", function ($scope) {
        $scope.todos = [
            { action: "Get groceries", complete: false },
            { action: "Call plumber", complete: false },
            { action: "Buy running shoes", complete: true },
            { action: "Buy flowers", complete: false },
            { action: "Call family", complete: false }
        ];

        $scope.buttons = ["Red", "Green", "Blue"];
        $scope.settings = {
            rows: "Red",
            columns: "Green"
        };
        $scope.handleEvent = (event) => {
            console.log("Event type: " + event.type);
            $scope.settings.columns = event.type == "mouseenter"? "Green": "Red";
        };
        $scope.dataValue = false;
    })
    .directive("tap", function () {
        return function (scope, elem, attrs) {
            elem.on("touchstart touchend", function () {
                scope.$apply(attrs['tap']);
            })
        }
    })
;