"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Day = _interopRequireDefault(require("./Day"));

var _calendarHelper = require("./CalendarHelper/__calendarHelper");

var _CalendarConstant = require("./CalendarHelper/CalendarConstant");

var _WeekHeader = _interopRequireDefault(require("./WeekHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// eslint-disable-next-line
global.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

var Calendar =
/*#__PURE__*/
function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Calendar).call(this, props));
    var refDate = props.value || new Date();
    var date = (0, _calendarHelper.convertDate)(refDate, _CalendarConstant.DATE_TYPE_BS);
    var selectedDate = (0, _calendarHelper.convertDate)(refDate, _CalendarConstant.DATE_TYPE_BS);
    var monthList = _CalendarConstant.nepaliMonth;
    _this.state = {
      theme: props.theme || 'dark',
      dateType: _CalendarConstant.DATE_TYPE_BS,
      date: date,
      monthList: monthList,
      currentMonth: monthList[date.getMonth()],
      currentYear: date.getYear(),
      selectedDate: selectedDate
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: "getWeekDays",
    value: function getWeekDays(currentDate) {
      var _this2 = this;

      var _this$state = this.state,
          date = _this$state.date,
          selectedDate = _this$state.selectedDate,
          theme = _this$state.theme;
      var days = [];
      var calendarDate = currentDate;

      for (var c = 0; c < 7; c += 1) {
        days.push(_react.default.createElement(_Day.default, {
          key: calendarDate,
          date: (0, _lodash.clone)(calendarDate),
          value: calendarDate.getDate(),
          isCurrentMonth: date.getMonth() === calendarDate.getMonth(),
          isSelectedDate: date.getMonth() === selectedDate.getMonth() && calendarDate.getDate() === selectedDate.getDate() && calendarDate.getYear() === selectedDate.getYear(),
          onChange: function onChange(d) {
            return _this2.changeSelectedDate(d);
          },
          fontColor: theme === _CalendarConstant.DARK ? _CalendarConstant.COLOR_LIGHT : _CalendarConstant.FONT_COLOR_DARK
        }));
        calendarDate.setDate(calendarDate.getDate() + 1);
      }

      return days;
    }
  }, {
    key: "changeDateType",
    value: function changeDateType(dateType) {
      // eslint-disable-next-line
      var selectedDate = this.state.date;
      var date = (0, _calendarHelper.convertDate)(selectedDate.date, dateType);
      var monthList = _CalendarConstant.DATE_TYPE_BS === dateType ? _CalendarConstant.nepaliMonth : _CalendarConstant.englishMonth;
      var currentMonth = _CalendarConstant.DATE_TYPE_BS === dateType ? _CalendarConstant.nepaliMonth[date.getMonth()] : _CalendarConstant.englishMonth[date.getMonth()];
      var currentYear = date.getYear();
      this.setState({
        dateType: dateType,
        date: date,
        monthList: monthList,
        currentMonth: currentMonth,
        currentYear: currentYear
      });
    }
  }, {
    key: "changeMonth",
    value: function changeMonth(currentMonth) {
      var _this$state2 = this.state,
          date = _this$state2.date,
          monthList = _this$state2.monthList;
      var nextMonth = monthList.indexOf(currentMonth);
      date.setMonth(nextMonth);
      this.setState({
        currentMonth: currentMonth
      });
    }
  }, {
    key: "changeYear",
    value: function changeYear(currentYear) {
      var date = this.state.date;
      date.setYear(currentYear);
      this.setState({
        currentYear: currentYear
      });
    }
  }, {
    key: "changeSelectedDate",
    value: function changeSelectedDate(date) {
      var dateType = this.state.dateType;
      var onSelect = this.props.onSelect;
      var selectedDate = (0, _calendarHelper.convertDate)(date, dateType);
      this.setState({
        selectedDate: selectedDate
      });

      if (onSelect) {
        onSelect(selectedDate.date);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state3 = this.state,
          date = _this$state3.date,
          dateType = _this$state3.dateType,
          monthList = _this$state3.monthList,
          currentYear = _this$state3.currentYear,
          currentMonth = _this$state3.currentMonth,
          selectedDate = _this$state3.selectedDate,
          theme = _this$state3.theme;
      var _this$props = this.props,
          onCancel = _this$props.onCancel,
          onChange = _this$props.onChange;
      var yearList = date.getYearList();
      var startingDate = date.getStartingDate();
      var calendarData = [];

      for (var r = 0; r < _CalendarConstant.NUM_OF_WEEKS; r += 1) {
        var calendarRow = _react.default.createElement("div", {
          key: startingDate,
          style: {
            margin: '20px 0px'
          }
        }, this.getWeekDays(startingDate));

        calendarData.push(calendarRow);
      }

      if (startingDate.getMonth() === date.getMonth()) {
        // if the month has more than 5 weeks
        calendarData.push(_react.default.createElement("div", {
          key: startingDate,
          style: {
            margin: '20px 0px'
          }
        }, this.getWeekDays(startingDate)));
      }

      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "main-calendar-container",
        style: {
          backgroundColor: theme === _CalendarConstant.DARK ? _CalendarConstant.COLOR_DARK : _CalendarConstant.COLOR_LIGHT,
          width: '545px',
          height: 'auto',
          borderRadius: '2%',
          paddingTop: '1px',
          marginTop: '-1px',
          marginBottom: '10px'
        }
      }, _react.default.createElement("div", {
        className: "calendar-container"
      }, _react.default.createElement("div", {
        className: "calendar-header",
        style: {
          width: '90%',
          margin: 'auto',
          marginTop: '5%'
        }
      }, _react.default.createElement("div", {
        className: "calendar-header-one",
        style: {
          display: 'inline',
          marginRight: '40%'
        }
      }, _react.default.createElement(_Select.default, {
        value: dateType,
        onChange: function onChange(event) {
          return _this3.changeDateType(event.target.value);
        },
        style: {
          color: theme === _CalendarConstant.DARK ? _CalendarConstant.COLOR_LIGHT : _CalendarConstant.FONT_COLOR_DARK,
          fontWeight: 'bolder',
          fontSize: 18,
          marginLeft: '18px'
        }
      }, _react.default.createElement(_MenuItem.default, {
        value: "B.S"
      }, " B.S "), _react.default.createElement(_MenuItem.default, {
        value: "A.D"
      }, " A.D "))), _react.default.createElement("div", {
        style: {
          display: 'inline-block',
          float: 'right'
        }
      }, _react.default.createElement(_Select.default, {
        value: currentMonth,
        onChange: function onChange(event) {
          return _this3.changeMonth(event.target.value);
        },
        style: {
          color: theme === _CalendarConstant.DARK ? _CalendarConstant.COLOR_LIGHT : _CalendarConstant.FONT_COLOR_DARK,
          fontWeight: 'bolder',
          fontSize: 18,
          marginRight: '15px'
        }
      }, monthList.map(function (m) {
        return _react.default.createElement(_MenuItem.default, {
          key: m,
          value: m
        }, " ", m, " ");
      })), _react.default.createElement(_Select.default, {
        value: currentYear,
        onChange: function onChange(event) {
          return _this3.changeYear(event.target.value);
        },
        style: {
          color: theme === _CalendarConstant.DARK ? _CalendarConstant.COLOR_LIGHT : _CalendarConstant.FONT_COLOR_DARK,
          fontWeight: 'bolder',
          fontSize: 18
        }
      }, yearList.map(function (m) {
        return _react.default.createElement(_MenuItem.default, {
          key: m,
          value: m
        }, " ", m, " ");
      })))), _react.default.createElement("div", {
        className: "calendar-content-container",
        style: {
          width: '88%',
          margin: 'auto',
          paddingBottom: '20px'
        }
      }, _react.default.createElement("div", {
        className: "weekdays-container",
        style: {
          width: '100%',
          marginTop: '5%',
          marginLeft: '4%'
        }
      }, _react.default.createElement(_WeekHeader.default, null)), _react.default.createElement("div", {
        className: "calendar-contents",
        style: {
          width: '100%'
        }
      }, calendarData), onCancel && onChange && _react.default.createElement("div", {
        className: "calendar-button",
        style: {
          width: '100%',
          marginLeft: '30%'
        }
      }, _react.default.createElement("div", {
        className: "calendar-button-contents",
        style: {
          display: 'inline',
          margin: '0 10px'
        }
      }, _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        onClick: function onClick() {
          return onChange(selectedDate.date);
        }
      }, "Ok")), _react.default.createElement("div", {
        className: "calendar-button-contents",
        style: {
          display: 'inline',
          margin: '0 10px'
        }
      }, _react.default.createElement(_Button.default, {
        variant: "contained",
        onClick: function onClick() {
          return onCancel(date.date);
        }
      }, "Cancel")))))));
    }
  }]);

  return Calendar;
}(_react.Component);

var _default = Calendar;
exports.default = _default;