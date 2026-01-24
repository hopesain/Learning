"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function check_availability(income) {
    if (income < 10_000) {
        return true;
    }
    return false;
}
let income = 100_000;
console.log(check_availability(income));
//# sourceMappingURL=01_functions.js.map