import NepaliCalendar from './NepaliCalendar';
import EnglishCalendar from './EnglishCalendar';
import { DATE_TYPE_AD, DATE_TYPE_BS, formatDefault } from './CalendarConstant';


export function formatDate(date, dateType = DATE_TYPE_BS, format = formatDefault) {
  return dateType === DATE_TYPE_AD
    ? new EnglishCalendar(date).format(format)
    : new NepaliCalendar(date).format(format);
}

export function convertDate(date, dateType) {
  const cloneDate = Object.assign(date);
  return dateType === DATE_TYPE_AD ? new EnglishCalendar(cloneDate) : new NepaliCalendar(cloneDate);
}
