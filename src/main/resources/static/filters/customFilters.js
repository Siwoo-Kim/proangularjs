/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-08-01 오전 9:16
 * @github : https://github.com/Siwoo-Kim
 **/

angular.module("customFilters", [])
    .filter("unique", function () {
        return function (data, propertyName) {
            if(angular.isArray(data) && angular.isString(propertyName)) {
                let results = [];
                let keys = {};
                for(let i=0; i<data.length; i++) {
                    let value = data[i][propertyName];
                    if(angular.isUndefined(keys[value])) {
                        keys[value] = true;
                        results.push(value);
                    }
                }
                return results;
            } else {
                return data;
            }
        }
    })
    .filter("range", function ($filter) {
        return function (data, page, size) {
            if(angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {
                let start_index = (page - 1) * size;
                if(data.length-1 <= start_index) {
                    return [];
                }
                return $filter("limitTo")(data.splice(start_index), size);
            } else {
                return data;
            }
        }
    })
    .filter("pageCount", function () {
        return function (data, size) {
            if(angular.isArray(data) && angular.isNumber(size)) {
                let results = [];
                for(let i=0; i<Math.ceil(data.length/size); i++) {
                    results.push(i);
                }
                return results;
            } else {
                return data;
            }
        }
    });
