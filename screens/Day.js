// @flow
import React from 'react';

type Props = {
  date: Date,
  value: number,
  onChange: Date => void;
  isCurrentMonth: boolean,
  isSelectedDate: boolean,
}

const Day = ({
  date, value, isCurrentMonth, isSelectedDate, onChange,
}: Props) => (
  <div
    style={{
      width: `${100 / 7}%`,
      color: isCurrentMonth ? 'white' : '#888888',
      alignItems: 'center',
      display: 'inline-block',
      backgroundColor: isSelectedDate ? '#3333CC' : null,
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