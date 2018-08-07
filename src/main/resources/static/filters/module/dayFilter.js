/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-08-07 오전 8:55
 * @github : https://github.com/Siwoo-Kim
 **/

angular.module("moduleApp.Filters", [])
    .filter("dayName", function () {
        let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return (value) => {
            return angular.isNumber(value)? dayNames[value]: value;
        }
    });