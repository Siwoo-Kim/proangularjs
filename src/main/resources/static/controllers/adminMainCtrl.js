/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-08-06 오전 9:18
 * @github : https://github.com/Siwoo-Kim
 **/

angular.module("sportsStoreAdmin")
    .controller("adminMainCtrl", function ($scope) {
        $scope.screens = ["Products", "Orders"];
        $scope.screen = $scope.screens[0];

        $scope.setScreen = (index) => $scope.screen = $scope.screens[index];
        $scope.getScreen = () => $scope.screen === $scope.screens[0]? "./views/admin/adminProducts.html": "./views/admin/adminOrders.html";
    });