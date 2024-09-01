/* eslint-disable no-else-return */

export const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  MONTH_NAMES_SHORT = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  DAY_NAMES = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  DAY_NAMES_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const formatHoursTo24 = (hours: number, minutes: number): string => {
  if (hours === 0 && minutes === 0) return "";

  const isPM: boolean = hours >= 12;
  const formattedHours: number = isPM ? hours - 12 || 12 : hours || 12; // Handles 0 and 12 hours formatting
  const newMinutes: string = `${minutes < 10 ? "0" : ""}${minutes}`;

  return `${formattedHours}:${newMinutes} ${isPM ? "PM" : "AM"}`;
};

const getFormattedDate = (
  date: Date,
  prefix?: string,
  hideYear: boolean = false
) => {
  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes: number = date.getMinutes();

  if (prefix) return `${prefix} - ${formatHoursTo24(hours, minutes)}`;

  return `${day} of ${month} ${
    !hideYear ? `of ${year}` : ""
  } - ${formatHoursTo24(hours, minutes)}`;
};

export const timeAgo = (dateParam: string) => {
  const date = new Date(dateParam);

  const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000

  const today = new Date();
  const yesterday = new Date(today.getTime() - DAY_IN_MS);

  const seconds = Math.round((today.getTime() - date.getTime()) / 1000);
  const minutes = Math.round(seconds / 60);

  const isToday = today.toDateString() === date.toDateString();
  const isYesterday = yesterday.toDateString() === date.toDateString();
  const isThisYear = today.getFullYear() === date.getFullYear();

  if (seconds < 5) {
    return "A few moments ago";
  } else if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (seconds < 90) {
    return "A minute ago";
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (isToday) {
    return getFormattedDate(date, "Today"); // Today @ 10:20
  } else if (isYesterday) {
    return getFormattedDate(date, "Yesterday"); // Yesterday @ 10:20
  } else if (isThisYear) {
    return getFormattedDate(date, "", true); // 10. January @ 10:20
  }

  return getFormattedDate(date); // 10. January 2024 at 10:20
};
