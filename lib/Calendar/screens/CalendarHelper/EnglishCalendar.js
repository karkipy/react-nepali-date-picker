import { englishMonth } from './CalendarConstant';

class EnglishCalendar implements Calendar {
  constructor(date) {
    this.date = new Date(date);
  }

  getStartingDate() {
    const date = Object.assign(this.date);
    date.setDate(1);
    const day = -Math.abs(date.getDay()) + 1;
    date.setDate(day);
    return date;
  }

  getCurrentMonth() {
    return englishMonth[this.date.getMonth()];
  }

  isSame(check) {
    const dateObject = new Date(check.getTime());
    return this.getYear() === dateObject.getFullYear()
      && this.getMonth() === dateObject.getMonth()
      && this.getDate() === dateObject.getDate();
  }

  isSameMonth(check) {
    const dateObject = new Date(check);
    return this.getMonth() === dateObject.getMonth()
      && this.getYear() === dateObject.getFullYear();
  }


  getMonth() {
    return this.date.getMonth();
  }

  getYear() {
    return this.date.getFullYear();
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

  getTime() {
    return this.date.getTime();
  }

  format(format) {
    const year = this.getYear();
    const month = this.getMonth() + 1;
    const day = this.getDate();
    const res = format.replace('YYYY', year).replace('MM', month).replace('DD', day);
    return res;
  }
}

export default EnglishCalendar;
