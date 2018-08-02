/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-08-02 오전 7:51
 * @github : https://github.com/Siwoo-Kim
 **/

angular.module("sportsStore")
    .constant("activeClass", "btn-primary")
    .constant("pageSize", 3)
    .controller("productListCtrl", function ($scope,
                                             activeClass,
                                             pageSize) {
        let selectedCategory = "home";
        $scope.pageSize = pageSize;
        $scope.currentPage = 1;

        $scope.selectCategory = (_category) =>{
            selectedCategory = _category;
            $scope.currentPage = 1;
        };
        $scope.categoryFilter = (_product) =>
            selectedCategory === "home" || _product.category === selectedCategory;
        $scope.getCategoryClass = (_category) =>
            selectedCategory === _category? activeClass: "";

        $scope.selectPage = (_page) =>
            $scope.currentPage = _page;
        $scope.getPageClass = (_page) =>
            $scope.currentPage === _page? activeClass: "";
    });