/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-08-06 오전 8:49
 * @github : https://github.com/Siwoo-Kim
 **/

angular.module("sportsStoreAdmin")
    .constant("authUrl", "http://localhost:8080/users/login")
    .controller("adminCtrl", function ($scope, $http, $location, authUrl) {
        $scope.login = (user, pass) => {
            $http.post(authUrl, {
                username: user,
                password: pass
            }, {
                withCredentials: true
            }).then(
                response => $location.path("/main"),
                error => $scope.authError = error);
        }
    });