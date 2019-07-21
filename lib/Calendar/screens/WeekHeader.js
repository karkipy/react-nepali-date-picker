import React from 'react';
import { days } from './CalendarHelper/CalendarConstant';


function WeekHeader() {
  return (
    <div className="week-header">
      {days.map((d) => {
        return <div key={d} className="day-title">{d}</div>;
      })}
    </div>
  );
}

export default WeekHeader;
