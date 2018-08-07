
angular.module("sportsStoreAdmin")
    .constant("productUrl", "http://localhost:8080/products")
    .config(function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    })
    .controller("productCtrl", function ($scope, $resource, productUrl) {
        // $scope.productsResource = $resource(productUrl + ":id", { id: "@id" });
        // $scope.listProducts = function () {
        //     $scope.products = $scope.productsResource.query();
        // };
        // $scope.deleteProducts = function (product) {
        //     product.$delete().then(
        //         () => $scope.products.splice($scope.products.indexOf(product), 1);
        //     )
        // };
        // $scope.createProduct = function (product) {
        //     $scope.productsResource(product).$save().then()
        // }
    });