// @flow
import React, { useState, useCallback } from 'react';
import './Calendar.css';
import CalendarNavBar from './CalendarNavBar';
import WeekHeader from './WeekHeader';
import Week from './Week';
import { convertDate } from './CalendarHelper/__calendarHelper';
import {
  nepaliMonth,
  englishMonth,
  DATE_TYPE_BS,
  NUM_OF_WEEKS,
} from './CalendarHelper/CalendarConstant';


const monthListObj = {
  'B.S': nepaliMonth,
  'A.D': englishMonth,
};

type Props = {
  onSelect: () => Date,
  value?: Date,
}


function Calendar({ value, onSelect }: Props) {
  const [dateType, setDateType] = useState(DATE_TYPE_BS);
  const [date, setDate] = useState(value.getTime());
  const [monthList, setMonthList] = useState(monthListObj[dateType]);
  const [startingDate, setStartingDate] = useState(() => {
    return convertDate(date, dateType).getStartingDate().getTime();
  });

  const changeDateType = useCallback((v) => {
    setDateType(v);
    setMonthList(monthListObj[v]);
    setStartingDate(() => {
      return convertDate(date, v).getStartingDate().getTime();
    });
  }, [setDateType, setMonthList, setStartingDate, date]);

  const changeMonth = useCallback((v) => {
    const index = monthList.indexOf(v);
    const currentDate = convertDate(date, dateType);
    currentDate.setMonth(index);
    const updatedDate = currentDate.getTime();
    setDate(() => {
      return updatedDate;
    });

    setStartingDate(() => {
      return convertDate(updatedDate, dateType).getStartingDate().getTime();
    });
  }, [monthList, dateType, date]);

  const changeYear = useCallback((v) => {
    const currentDate = convertDate(date, dateType);
    currentDate.setYear(v);
    const updatedDate = currentDate.getTime();
    setDate(() => {
      return updatedDate;
    });

    setStartingDate(() => {
      return convertDate(updatedDate, dateType).getStartingDate().getTime();
    });
  }, [dateType, date]);


  const changeDate = useCallback((v, flag) => {
    if (flag === 'type') {
      changeDateType(v);
    } else if (flag === 'month') {
      changeMonth(v);
    } else if (flag === 'year') {
      changeYear(v);
    }
  }, [changeDateType, changeMonth, changeYear]);

  return (
    <div className="calendar-container">
      <CalendarNavBar
        dateType={dateType}
        setDateType={setDateType}
        monthList={monthList}
        date={date}
        changeDate={changeDate}
      />
      <WeekHeader />

      <div className="weeks-container">
        {Array(NUM_OF_WEEKS).fill(null).map((d, idx) => {
          return (
            <Week
              // eslint-disable-next-line
              key={idx}
              startDate={startingDate + idx * 86400 * 7 * 1000}
              dateType={dateType}
              onSelect={onSelect}
              value={value}
            />
          );
        })}

      </div>
    </div>
  );
}

Calendar.defaultProps = {
  value: new Date(),
};

export default Calendar;
