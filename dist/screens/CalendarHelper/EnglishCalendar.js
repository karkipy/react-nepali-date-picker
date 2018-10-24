"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _calendarHelper = require("./__calendarHelper");

var _CalendarConstant = require("./CalendarConstant");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EnglishCalendar =
/*#__PURE__*/
function () {
  function EnglishCalendar(date) {
    _classCallCheck(this, EnglishCalendar);

    this.date = date.timestamp || date;
  }

  _createClass(EnglishCalendar, [{
    key: "getStartingDate",
    value: function getStartingDate() {
      return (0, _calendarHelper.getStartingDate)(this.date);
    }
  }, {
    key: "getCurrentMonth",
    value: function getCurrentMonth() {
      return _CalendarConstant.englishMonth[this.date.getMonth()];
    }
  }, {
    key: "getNextMonth",
    value: function getNextMonth() {
      var dateObj = (0, _lodash.clone)(this.date);
      var date = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 1);
      return new EnglishCalendar(date);
    }
  }, {
    key: "getPrevMonth",
    value: function getPrevMonth() {
      var dateObj = (0, _lodash.clone)(this.date);
      var date = new Date(dateObj.getFullYear(), dateObj.getMonth() - 1, 1);
      return new EnglishCalendar(date);
    }
  }, {
    key: "getMonth",
    value: function getMonth() {
      return this.date.getMonth();
    }
  }, {
    key: "getYear",
    value: function getYear() {
      return this.date.getFullYear();
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
      var currentDate = new EnglishCalendar(new Date());
      var yearStart = currentDate.getYear() - 150;

      for (var i = 0; i < 500; i += 1) {
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
      var year = this.getYear();
      var month = this.getMonth() + 1;
      var day = this.getDate();

      var res = _format.replace('YYYY', year).replace('MM', month).replace('DD', day);

      return res;
    }
  }]);

  return EnglishCalendar;
}();

var _default = EnglishCalendar;
exports.default = _default;