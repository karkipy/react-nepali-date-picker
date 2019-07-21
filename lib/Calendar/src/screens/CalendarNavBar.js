// @flow
import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {
  DATE_TYPE_BS,
  DATE_TYPE_AD,
} from './CalendarHelper/CalendarConstant';
import { convertDate } from './CalendarHelper/__calendarHelper';


type Props = {
  date: Date,
  monthList: Array,
  dateType: string,
  changeDate: () => void,
}


const yearList = [];
for (let i = 0; i < 200; i += 1) {
  yearList.push(1900 + i);
}

function CalendarNavBar({ date, monthList, dateType, changeDate }: Props) {
  const calendarDate = convertDate(date, dateType);
  const currentMonth = monthList[calendarDate.getMonth()];
  const currentYear = calendarDate.getYear();
  return (
    <div className="calendar-header">
      <Select
        value={dateType}
        onChange={e => changeDate(e.target.value, 'type')}
      >
        <MenuItem value={DATE_TYPE_BS}>{DATE_TYPE_BS}</MenuItem>
        <MenuItem value={DATE_TYPE_AD}>{DATE_TYPE_AD}</MenuItem>
      </Select>
      <div>
        <Select
          value={currentMonth}
          onChange={e => changeDate(e.target.value, 'month')}
        >
          {monthList.map((ml) => {
            return (
              <MenuItem key={ml} value={ml}>{ml}</MenuItem>
            );
          })}
        </Select>
        <Select
          value={currentYear}
          onChange={e => changeDate(e.target.value, 'year')}
        >
          {yearList.map((y) => {
            return (
              <MenuItem key={y} value={y}>{y}</MenuItem>
            );
          })}
        </Select>
      </div>
    </div>
  );
}

export default CalendarNavBar;
