
import { MonthData } from './types';

/**
 * Determines if a given year is a leap year
 * @param year - The year to check
 * @returns boolean indicating if it's a leap year
 */
export const isLeapYear = (year: number): boolean =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

/**
 * Gets the week number for a given date
 * @param date - The date to get the week number for
 * @returns number representing the week of the year (1-53)
 */
export const getWeekNumber = (date: Date): number => {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
};

/**
 * Checks if a given date is a weekend
 * @param date - The date to check
 * @returns boolean indicating if it's a weekend
 */
export const isWeekend = (date: Date): boolean => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

/**
 * Returns an array of month data for a given year
 * @param year - The year to get month data for
 * @returns Array of MonthData objects
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
    const weekNumbers = Array.from({ length: daysInMonth[index] }, (_, dayIndex) => {
      const date = new Date(year, index, dayIndex + 1);
      return getWeekNumber(date);
    });

    const monthData = {
      name,
      days: daysInMonth[index],
      startDayIndex,
      weekNumbers
    };
    startDayIndex += daysInMonth[index];
    return monthData;
  });
};

/**
 * Snaps a position to the nearest day boundary
 * @param position - The current position in pixels
 * @param dayWidth - The width of each day column
 * @returns number representing the snapped position
 */
export const snapToDay = (position: number, dayWidth: number): number =>
  Math.round(position / dayWidth) * dayWidth;
