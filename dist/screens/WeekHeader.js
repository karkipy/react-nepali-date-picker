"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CalendarConstant = require("./CalendarHelper/CalendarConstant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WeekHeader = function WeekHeader() {
  return _CalendarConstant.days && _CalendarConstant.days.map(function (d, idx) {
    return (// eslint-disable-next-line
      _react.default.createElement("div", {
        key: idx,
        style: {
          width: "".concat(100 / 7, "%"),
          color: 'white',
          fontWeight: 'bold',
          alignItems: 'center',
          display: 'inline-block'
        }
      }, d)
    );
  });
};

var _default = WeekHeader;
exports.default = _default;