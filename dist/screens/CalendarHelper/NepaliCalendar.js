"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _nepaliDate = _interopRequireDefault(require("nepali-date"));

var _calendarHelper = require("./__calendarHelper");

var _CalendarConstant = require("./CalendarConstant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NepaliCalendar =
/*#__PURE__*/
function () {
  function NepaliCalendar(date) {
    _classCallCheck(this, NepaliCalendar);

    this.date = new _nepaliDate.default(date);
  }

  _createClass(NepaliCalendar, [{
    key: "getStartingDate",
    value: function getStartingDate() {
      return (0, _calendarHelper.getStartingDate)(this.date);
    }
  }, {
    key: "getCurrentMonth",
    value: function getCurrentMonth() {
      return _CalendarConstant.nepaliMonth[this.date.getMonth()];
    }
  }, {
    key: "getNextMonth",
    value: function getNextMonth() {
      var dateObj = (0, _lodash.clone)(this.date);
      var date = new _nepaliDate.default(dateObj.getYear(), dateObj.getMonth() + 1, 1);
      return new NepaliCalendar(date);
    }
  }, {
    key: "getPrevMonth",
    value: function getPrevMonth() {
      var dateObj = (0, _lodash.clone)(this.date);
      var date = new _nepaliDate.default(dateObj.getYear(), dateObj.getMonth() - 1, 1);
      return new NepaliCalendar(date);
    }
  }, {
    key: "getMonth",
    value: function getMonth() {
      return this.date.getMonth();
    }
  }, {
    key: "getYear",
    value: function getYear() {
      return this.date.getYear();
    }
  }, {
    key: "getDate",
    value: function getDate() {
      return this.date.getDate();
    }
  }, {
    key: "getYearList",
    value: function getYearList() {
      var yearList = [];
      var currentDate = new NepaliCalendar(new Date());
      var yearStart = currentDate.getYear() - 150;

      for (var i = 0; i < 200; i += 1) {
        yearList.push(yearStart);
        yearStart += 1;
      }

      return yearList;
    }
  }, {
    key: "setMonth",
    value: function setMonth(month) {
      this.date.setMonth(month);
    }
  }, {
    key: "setYear",
    value: function setYear(year) {
      this.date.setYear(year);
    }
  }, {
    key: "format",
    value: function format(_format) {
      return this.date.format(_format);
    }
  }]);

  return NepaliCalendar;
}();

var _default = NepaliCalendar;
exports.default = _default;