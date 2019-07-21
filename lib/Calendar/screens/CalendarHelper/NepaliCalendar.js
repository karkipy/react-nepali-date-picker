import clone from 'lodash.clone';
import NepaliDate from 'nepali-date';
import { nepaliMonth } from './CalendarConstant';

class NepaliCalendar implements Calendar {
  constructor(date) {
    this.date = new NepaliDate(new Date(date));
  }

  getStartingDate() {
    const date = clone(this.date);
    date.setDate(1);
    const day = -Math.abs(date.getDay()) + 1;
    date.setDate(day);
    return date;
  }

  isSame(check) {
    const dateObject = new NepaliDate(new Date(check.getTime()));
    return this.getYear() === dateObject.getYear()
      && this.getMonth() === dateObject.getMonth()
      && this.getDate() === dateObject.getDate();
  }

  isSameMonth(check) {
    const dateObject = new NepaliDate(new Date(check.getTime()));
    return this.getMonth() === dateObject.getMonth()
      && this.getYear() === dateObject.getYear();
  }

  getCurrentMonth() {
    return nepaliMonth[this.date.getMonth()];
  }

  getMonth() {
    return this.date.getMonth();
  }

  getTime() {
    return this.date.getTime();
  }

  getYear() {
    return this.date.getYear();
  }

  getDate() {
    return this.date.getDate();
  }

  setMonth(month) {
    this.date.setMonth(month);
  }

  setYear(year) {
    this.date.setYear(year);
  }

  format(format) {
    return this.date.format(format);
  }
}

export default NepaliCalendar;
