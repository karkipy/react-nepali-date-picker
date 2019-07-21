// @flow
import React from 'react';
import Day from './Day';

type Props = {
  startDate: number,
}

function Week({ startDate, ...other }: Props) {
  return (
    <div className="week">
      {
        Array(7).fill(null).map((d, idx) => {
          const date = startDate + idx * 86400 * 1000;
          return <Day key={date} date={date} {...other} />;
        })
      }
    </div>
  );
}

export default Week;
