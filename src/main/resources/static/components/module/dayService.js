/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-08-07 오전 8:59
 * @github : https://github.com/Siwoo-Kim
 **/

angular.module("moduleApp.Services", [])
    .config(() => console.log("Services module config: " ))
    .run((startTime) => console.log("Services module run: " + startTime))
    .service("days", function () {
        this.today = new Date().getDay();
        this.tomorrow = (this.today + 1) & 7;
    });
    