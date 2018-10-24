"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStartingDate = getStartingDate;
exports.formatDate = formatDate;
exports.convertDate = convertDate;

var _lodash = require("lodash");

var _NepaliCalendar = _interopRequireDefault(require("./NepaliCalendar"));

var _EnglishCalendar = _interopRequireDefault(require("./EnglishCalendar"));

var _CalendarConstant = require("./CalendarConstant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStartingDate(calendarObj) {
  var date = (0, _lodash.clone)(calendarObj);
  date.setDate(1);
  var day = -Math.abs(date.getDay()) + 1;
  date.setDate(day);
  return date;
}

function formatDate(date) {
  var dateType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _CalendarConstant.DATE_TYPE_BS;
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _CalendarConstant.formatDefault;
  return dateType === _CalendarConstant.DATE_TYPE_AD ? new _EnglishCalendar.default(date).format(format) : new _NepaliCalendar.default(date).format(format);
}

function convertDate(date, dateType) {
  var cloneDate = (0, _lodash.clone)(date);
  return dateType === _CalendarConstant.DATE_TYPE_AD ? new _EnglishCalendar.default(cloneDate) : new _NepaliCalendar.default(cloneDate);
}