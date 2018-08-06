/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-08-06 오전 9:27
 * @github : https://github.com/Siwoo-Kim
 **/

angular.module("sportsStoreAdmin")
    .constant("ordersUrl", "http://localhost:8080/products/orders")
    .controller("ordersCtrl", function ($scope, $http, ordersUrl) {
        $http.get(ordersUrl, { withCredentials: true })
            .then(
                response => $scope.orders = response.data,
                error => $scope.error = error
            );

        $scope.selectOrder = (order) => $scope.order = order;
        $scope.getTotal = (order) => {
            console.log(order);
            let total = 0;
            for(var i=0; i<order.products.length; i++) {
                let product = order.products[i];
                total += product.price * product.count ;
            }
            return total;
        }
});
    