"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Day = function Day(_ref) {
  var date = _ref.date,
      value = _ref.value,
      isCurrentMonth = _ref.isCurrentMonth,
      isSelectedDate = _ref.isSelectedDate,
      onChange = _ref.onChange;
  return _react.default.createElement("div", {
    style: {
      width: "".concat(100 / 7, "%"),
      color: isCurrentMonth ? 'white' : '#888888',
      alignItems: 'center',
      display: 'inline-block',
      backgroundColor: isSelectedDate ? '#3333CC' : null
    }
  }, _react.default.createElement("center", null, _react.default.createElement("button", {
    type: "button",
    style: {
      border: 'none',
      width: '80%',
      background: 'none',
      color: 'inherit',
      padding: 0,
      font: 'inherit',
      cursor: 'pointer',
      outline: 'inherit'
    },
    onClick: function onClick() {
      return onChange(date);
    }
  }, value)));
};

var _default = Day;
exports.default = _default;