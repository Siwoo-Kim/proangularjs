/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-08-01 오전 8:54
 * @github : https://github.com/Siwoo-Kim
 **/

angular.module("sportsStore")
    .constant({productsUrl: "/products"})
    .controller("sportsStoreCtrl", function ($scope, $http, productsUrl) {

        $http.get(productsUrl)
            .then(response =>{ console.log(response); $scope.products = response.data});
    });
    