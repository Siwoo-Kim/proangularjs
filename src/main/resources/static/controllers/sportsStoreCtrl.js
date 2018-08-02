/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-08-02 오전 8:29
 * @github : https://github.com/Siwoo-Kim
 **/


angular.module("sportsStore")
    .constant("productsUrl", "http://localhost:8080/products")
    .controller("sportsStoreCtrl", function ($scope, $http, productsUrl) {
        $http.get(productsUrl)
            .then(
                (response) => $scope.products = response.data,
                (error) => $scope.error = error);
    });