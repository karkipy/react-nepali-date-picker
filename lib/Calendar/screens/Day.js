// @flow
import React from 'react';
import { convertDate } from './CalendarHelper/__calendarHelper';

type Props = {
  date: Date,
  value: number,
  onSelect: Date => void;
  dateType: string,
}

function Day({
  date, dateType, value, onSelect,
}: Props) {
  const displayDate = convertDate(date, dateType);
  const active = displayDate.isSame(value);
  const isSameMonth = displayDate.isSameMonth(value);
  const className = `day ${active ? 'selected' : ''} ${isSameMonth ? '' : 'disabled'}`;
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        if (onSelect) {
          onSelect(new Date(date));
        }
      }}
    >
      {displayDate.getDate()}
    </button>
  );
}

export default Day;
