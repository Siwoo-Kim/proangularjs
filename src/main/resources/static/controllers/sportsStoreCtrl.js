/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-08-02 오전 8:29
 * @github : https://github.com/Siwoo-Kim
 **/
angular.module("sportsStore")
    .constant("productsUrl", "http://localhost:8080/products")
    .controller("sportsStoreCtrl", function (
        $scope,
        $http,
        $location,
        cart,
        productsUrl) {

        $http.get(productsUrl)
            .then((response) => $scope.products = response.data,
                (error) => $scope.error = error);

        $scope.sendOrder = (order) => {
            let _order = angular.copy(order);
            _order.products = cart.getItems();
            let price = 0;
            _order.products.forEach(_item => price += (_item.count * _item.price));
            _order.totalPrice = price;
            console.log(_order);

            $http.post(productsUrl, _order)
                .then(
                    response => {
                        $scope.completeOrder = response.data;
                        $scope.orderId = response.data.id;
                    },
                    error => $scope.orderError = error
                )
                .finally(() => $location.path("/complete"));
        }
    });