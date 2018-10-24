// @flow
import React from 'react';
import { FONT_GREY } from './CalendarHelper/CalendarConstant';

type Props = {
  date: Date,
  value: number,
  onChange: Date => void;
  isCurrentMonth: boolean,
  isSelectedDate: boolean,
  fontColor: string,
}

const Day = ({
  date, value, isCurrentMonth, isSelectedDate, onChange, fontColor,
}: Props) => (
  <div
    style={{
      width: `${100 / 7}%`,
      // eslint-disable-next-line
      color: isCurrentMonth ? ( isSelectedDate ? 'white' : fontColor ) : FONT_GREY,
      alignItems: 'center',
      display: 'inline-block',
      backgroundColor: isSelectedDate && isCurrentMonth ? '#3333CC' : null,
    }}
  >
    <center>
      <button
        type="button"
        style={{
          border: 'none',
          width: '80%',
          background: 'none',
          color: 'inherit',
          padding: 0,
          font: 'inherit',
          cursor: 'pointer',
          outline: 'inherit',
        }}
        onClick={() => onChange(date)}
      >
        {value}
      </button>
    </center>
  </div>
);

export default Day;
