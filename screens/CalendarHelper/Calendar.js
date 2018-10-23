// @flow
export interface Calendar {
  getMonth: () => number;
  getYear: () => number;
  getStartingDate: () => Date;
  getCurrentMonth: () => String;
  getNextMonth: () => Date;
  getPrevMonth: () => Date;
  getYearList: () => Array;
  format: (String) => String;
}
