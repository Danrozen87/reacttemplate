
import { MonthData } from './types';

/**
 * Determines if a given year is a leap year
 */
export const isLeapYear = (year: number): boolean =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

/**
 * Returns an array of month data for a given year
 */
export const getMonthsData = (year: number): MonthData[] => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = [
    31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30,
    31, 31, 30, 31, 30, 31
  ];

  let startDayIndex = 0;
  return monthNames.map((name, index) => {
    const monthData = {
      name,
      days: daysInMonth[index],
      startDayIndex
    };
    startDayIndex += daysInMonth[index];
    return monthData;
  });
};

export const snapToDay = (position: number, dayWidth: number): number =>
  Math.round(position / dayWidth) * dayWidth;
