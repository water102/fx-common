import { addMinutes } from './add-minutes';

describe('addMinutes function', () => {
  test('should return the correct date when adding positive minutes', () => {
    const inputDate = new Date('2023-08-07T12:00:00');
    const addedMinutes = 30;
    const result = addMinutes(inputDate, addedMinutes);

    const expectedDate = new Date('2023-08-07T12:30:00');
    expect(result).toEqual(expectedDate);
  });

  test('should return the correct date when adding negative minutes', () => {
    const inputDate = new Date('2023-08-07T12:00:00');
    const addedMinutes = -15;
    const result = addMinutes(inputDate, addedMinutes);

    const expectedDate = new Date('2023-08-07T11:45:00');
    expect(result).toEqual(expectedDate);
  });

  test('should return the current date when input date is not an instance of Date', () => {
    const inputDate = '2023-08-07T12:00:00';
    const addedMinutes = 20;
    const result = addMinutes(inputDate as any, addedMinutes);

    const currentDate = new Date();
    expect(result).toEqual(currentDate);
  });
});
