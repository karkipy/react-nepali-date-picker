"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDefault = exports.NUM_OF_WEEKS = exports.nepaliMonth = exports.englishMonth = exports.days = exports.DATE_TYPE_BS = exports.DATE_TYPE_AD = void 0;
var DATE_TYPE_AD = 'A.D';
exports.DATE_TYPE_AD = DATE_TYPE_AD;
var DATE_TYPE_BS = 'B.S';
exports.DATE_TYPE_BS = DATE_TYPE_BS;
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
exports.days = days;
var englishMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
exports.englishMonth = englishMonth;
var nepaliMonth = ['Baishakh', 'Jestha', 'Ashadh', 'Shrawan', 'Bhadra', 'Ashwin', 'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra'];
exports.nepaliMonth = nepaliMonth;
var NUM_OF_WEEKS = 5;
exports.NUM_OF_WEEKS = NUM_OF_WEEKS;
var formatDefault = 'YYYY-MM-DD';
exports.formatDefault = formatDefault;