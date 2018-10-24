// @flow
import React, { Component } from 'react';
import './Calendar.css';
import { clone } from 'lodash';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Day from './Day';
import { convertDate } from './CalendarHelper/__calendarHelper';
import {
  DARK,
  COLOR_DARK,
  COLOR_LIGHT,
  nepaliMonth,
  englishMonth,
  DATE_TYPE_BS,
  NUM_OF_WEEKS,
  FONT_COLOR_DARK,
} from './CalendarHelper/CalendarConstant';
import WeekHeader from './WeekHeader';


// eslint-disable-next-line
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

type Props = {
  onSelect: () => Date,
  onChange: () => Date,
  onCancel: () => Date,
  theme: string,
  date: Date,
}

class Calendar extends Component<Props> {
  constructor(props) {
    super(props);
    const refDate = props.date || new Date();
    const date = convertDate(refDate, DATE_TYPE_BS);
    const selectedDate = convertDate(refDate, DATE_TYPE_BS);
    const monthList = nepaliMonth;
    this.state = {
      theme: props.theme || 'dark',
      dateType: DATE_TYPE_BS,
      date,
      monthList,
      currentMonth: monthList[date.getMonth()],
      currentYear: date.getYear(),
      selectedDate,
    };
  }


  getWeekDays(currentDate) {
    const { date, selectedDate, theme } = this.state;
    const days = [];
    const calendarDate = currentDate;
    for (let c = 0; c < 7; c += 1) {
      days.push(
        <Day
          key={calendarDate}
          date={clone(calendarDate)}
          value={calendarDate.getDate()}
          isCurrentMonth={date.getMonth() === calendarDate.getMonth()}
          isSelectedDate={date.getMonth() === selectedDate.getMonth()
            && calendarDate.getDate() === selectedDate.getDate()
            && calendarDate.getYear() === selectedDate.getYear()
          }
          onChange={d => this.changeSelectedDate(d)}
          fontColor={ theme === DARK ? COLOR_LIGHT : FONT_COLOR_DARK }
        />,
      );
      calendarDate.setDate(calendarDate.getDate() + 1);
    }
    return days;
  }


  changeDateType(dateType) {
    // eslint-disable-next-line
    const selectedDate = this.state.date;
    const date = convertDate(selectedDate.date, dateType);
    const monthList = DATE_TYPE_BS === dateType ? nepaliMonth : englishMonth;
    const currentMonth = DATE_TYPE_BS === dateType
      ? nepaliMonth[date.getMonth()]
      : englishMonth[date.getMonth()];
    const currentYear = date.getYear();
    this.setState({
      dateType,
      date,
      monthList,
      currentMonth,
      currentYear,
    });
  }

  changeMonth(currentMonth) {
    const { date, monthList } = this.state;
    const nextMonth = monthList.indexOf(currentMonth);
    date.setMonth(nextMonth);
    this.setState({ currentMonth });
  }

  changeYear(currentYear) {
    const { date } = this.state;
    date.setYear(currentYear);
    this.setState({ currentYear });
  }

  changeSelectedDate(date) {
    const { dateType } = this.state;
    const { onSelect } = this.props;
    const selectedDate = convertDate(date, dateType);
    this.setState({
      selectedDate,
    });

    if (onSelect) {
      onSelect(selectedDate.date);
    }
  }


  render() {
    const {
      date,
      dateType,
      monthList,
      currentYear,
      currentMonth,
      selectedDate,
      theme,
    } = this.state;
    const { onCancel, onChange } = this.props;
    const yearList = date.getYearList();
    const startingDate = date.getStartingDate();


    const calendarData = [];
    for (let r = 0; r < NUM_OF_WEEKS; r += 1) {
      const calendarRow = (
        <div
          key={startingDate}
          style={{ margin: '20px 0px' }}
        >
          {this.getWeekDays(startingDate)}
        </div>

      );
      calendarData.push(calendarRow);
    }

    if (startingDate.getMonth() === date.getMonth()) {
      // if the month has more than 5 weeks
      calendarData.push(
        <div
          key={startingDate}
          style={{ margin: '20px 0px' }}
        >
          {this.getWeekDays(startingDate)}
        </div>,
      );
    }


    return (
      <div>
        <div
          className="main-calendar-container"
          style={{ backgroundColor: theme === DARK ? COLOR_DARK : COLOR_LIGHT }}
        >
          <div className="calendar-container">
            <div className="calendar-header">
              <div className="calendar-header-one">
                <Select
                  value={dateType}
                  onChange={event => this.changeDateType(event.target.value)}
                  style={{
                    color: theme === DARK ? COLOR_LIGHT : FONT_COLOR_DARK,
                    fontWeight: 'bolder',
                    fontSize: 18,
                    marginLeft: '18px',
                  }}
                >
                  <MenuItem value="B.S"> B.S </MenuItem>
                  <MenuItem value="A.D"> A.D </MenuItem>
                </Select>
              </div>

              <div style={{ display: 'inline-block', float: 'right' }}>
                {/* Month Selection */}
                <Select
                  value={currentMonth}
                  onChange={event => this.changeMonth(event.target.value)}
                  style={{
                    color: theme === DARK ? COLOR_LIGHT : FONT_COLOR_DARK,
                    fontWeight: 'bolder',
                    fontSize: 18,
                    marginRight: '15px',
                  }}
                >
                  {
                    monthList.map(m => (
                      <MenuItem key={m} value={m}> {m} </MenuItem>
                    ))
                  }
                </Select>

                {/* Year Selection */}
                <Select
                  value={currentYear}
                  onChange={event => this.changeYear(event.target.value)}
                  style={{
                    color: theme === DARK ? COLOR_LIGHT : FONT_COLOR_DARK,
                    fontWeight: 'bolder',
                    fontSize: 18,
                  }}
                >
                  {
                    yearList.map(m => (
                      <MenuItem key={m} value={m}> {m} </MenuItem>
                    ))
                  }

                </Select>
              </div>
            </div>

            {/* Calendar Contents */}
            <div className="calendar-content-container">
              <div className="weekdays-container">
                <WeekHeader />
              </div>
              <div className="calendar-contents">
                { calendarData }
              </div>

              {onCancel && onChange && (
              <div className="calendar-button">
                <div className="calendar-button-contents">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => onChange(selectedDate.date)}
                  >
                    Ok
                  </Button>
                </div>
                <div className="calendar-button-contents">
                  <Button
                    variant="contained"
                    onClick={() => onCancel(date.date)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
              )
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Calendar;
