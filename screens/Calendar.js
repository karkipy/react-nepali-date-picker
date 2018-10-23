import React, { Component } from 'react';
import homeWhite from './img/home_white.png';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { convertDate } from './CalendarHelper/__calendarHelper';
import { englishMonth, nepaliMonth, DATE_TYPE_BS } from './CalendarHelper/CalendarConstant';
import WeekHeader from './WeekHeader';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

class Calendar extends Component {
  constructor(props) {
    super(props);
    const date = convertDate(new Date(), DATE_TYPE_BS);
    const monthList = nepaliMonth;
    this.state = {
      theme: props.theme || 'dark',
      dateType: DATE_TYPE_BS,
      date,
      monthList,
      currentMonth: monthList[date.getMonth()],
      currentYear: date.getYear(),
    }
  }

  changeDateType(dateType) {
    const date = convertDate(new Date(), dateType);
    const monthList = DATE_TYPE_BS === dateType ? nepaliMonth : englishMonth;
    const currentMonth = DATE_TYPE_BS === dateType ? nepaliMonth[date.getMonth()] : englishMonth[date.getMonth()];
    const currentYear = date.getYear();
    this.setState({
      dateType,
      date,
      monthList,
      currentMonth,
      currentYear,
    });
  }

  render() {
    const { dateType, date, monthList, currentMonth, currentYear } = this.state;
    const yearList = date.getYearList();
    return (
      <div style={{ marginLeft: '200px',
        marginTop: '50px'}}>
        <div className="main-calendar-container">
          <div className="calendar-container">
            <div className="calendar-header" >
              <div className="calendar-header-one">
                <div style={{
                    display: 'inline',
                  }}>
                  <div style={{
                    width: '28px',
                    height: '20px',
                    display: 'inline-block',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url(${homeWhite})`
                  }} />
                </div>
                <Select
                  value={dateType}
                  onChange={event => this.changeDateType(event.target.value)}
                  style={{ color: 'white', fontWeight:'bolder', fontSize: 18, marginLeft: '18px' }}
                >
                  <MenuItem value="B.S"> B.S </MenuItem>
                  <MenuItem value="A.D"> A.D </MenuItem>
                </Select>
              </div>
              {/* Month Selection */}
              <Select
                value={currentMonth}
                onChange={event => this.setState({ currentMonth : event.target.value})}
                style={{ color: 'white', fontWeight:'bolder', fontSize: 18,  marginLeft: '18px' }}
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
                onChange={event => this.setState({ currentYear : event.target.value})}
                style={{ color: 'white', fontWeight:'bolder', fontSize: 18,  marginLeft: '18px' }}
              >
                {
                  yearList.map(m => (
                    <MenuItem key={m} value={m}> {m} </MenuItem>
                  ))
                }

              </Select>

            </div>


            <div className="calendar-content-container">
              <div className="weekdays-container">
                <WeekHeader />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Calendar;
