/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-08-02 오전 7:51
 * @github : https://github.com/Siwoo-Kim
 **/


angular.module("sportsStore")
    .constant("activeClass", "btn-primary")
    .constant("defaultPageSize", 3)
    .controller("productListCtrl", function (
        $scope,
        cart,
        activeClass,
        defaultPageSize) {
        let category = 'home';
        $scope.page = 1;
        $scope.pageSize = defaultPageSize;

        $scope.selectCategory = (_category) => {
            category = _category;
            $scope.page = 1;
        };
        $scope.selectPage = (_page) => $scope.page = _page;
        $scope.getPageClass = (_page) => _page === $scope.page? activeClass: "";
        $scope.categoryFilter = (_product) => category === 'home' || category === _product.category;
        $scope.getCategoryClass = (_category) => _category === category? activeClass: "";
        $scope.addProduct = (_product) => cart.addItem(_product.id, _product.name, _product.price);
    });