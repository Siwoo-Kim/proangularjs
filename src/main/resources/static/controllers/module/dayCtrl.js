/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-08-07 오전 8:47
 * @github : https://github.com/Siwoo-Kim
 **/

angular.module("moduleApp.Controllers", [])
    .controller("dayCtrl", function ($scope, days) {
        // $scope.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        $scope.day = days.today;
    })
    .controller("tomorrowCtrl", function ($scope, days) {
        // $scope.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        $scope.day = days.tomorrow;
    });
    