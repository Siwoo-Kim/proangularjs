/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-08-07 오전 8:53
 * @github : https://github.com/Siwoo-Kim
 **/

angular.module("moduleApp")
    .directive("highlight", function ($filter) {
        return (scope, element, attrs) => {
            let dayName = $filter("dayName");
            if(dayName(scope.day) === attrs["highlight"]) {
                element.css("background-color", "lightgreen")
                    .css("font-weight", "bold")
            }
        }
    });
    