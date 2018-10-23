import React from 'react';
import { days } from './CalendarHelper/CalendarConstant';

const WeekHeader = () => days && days.map((d, idx) => (
  // eslint-disable-next-line
  <div
    key={idx}
    style={{
      width: `${100 / 7}%`,
      color: 'white',
      fontWeight:'bold',
      alignItems: 'center',
      display: 'inline-block'
    }}>
    {d}
  </div>
));

export default WeekHeader;