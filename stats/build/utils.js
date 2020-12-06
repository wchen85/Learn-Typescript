"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringtoDate = void 0;
var dateStringtoDate = function (dateString) {
    // '28/10/2018'
    var dateParts = dateString
        .split('/') // ['28', '10', '2018']
        .map(function (value) {
        return parseInt(value); // [28, 10, 2018]
    });
    // Mounth for Date contructure starts at 0 so need to -1
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringtoDate = dateStringtoDate;
