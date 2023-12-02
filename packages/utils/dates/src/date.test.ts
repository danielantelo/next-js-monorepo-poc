import { formatDate } from './date';

test('formatDate', () => {
  jest.useFakeTimers().setSystemTime(new Date('2023-12-02'));
  expect(formatDate(new Date('2023-12-02'))).toEqual('Today');
  expect(formatDate(new Date('2023-12-03'))).toEqual('Tomorrow');
  expect(formatDate(new Date('2023-11-02'))).toEqual('Thu, 02 Nov');
});
