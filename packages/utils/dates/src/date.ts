import dayjs from 'dayjs';

export function formatDate(date: Date): string {
  const todaysDate = new Date();
  if (date.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
    return 'Today';
  }

  const tomorrowsDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate() + 1);
  if (date.setHours(0, 0, 0, 0) == tomorrowsDate.setHours(0, 0, 0, 0)) {
    return 'Tomorrow';
  }

  const dj = dayjs(date);
  return `${dj.day(date.getDay())}, ${dj.format('DD MMM')}`.slice(0, 11);
}
