/**
 * Returns a greeting based on the current time of day.
 * @returns A greeting string: 'Good morning!', 'Good afternoon!', or 'Good evening!'
 * @example
 * const greeting = getGreeting(); // 'Good morning!' (if current hour is 5-11)
 */
export const getGreeting = () => {
  const greetings = {
    morning: 'Good morning!',
    afternoon: 'Good afternoon!',
    evening: 'Good evening!',
  };

  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12)
    return greetings.morning;
  else
    if (currentHour >= 12 && currentHour < 17)
      return greetings.afternoon;
    else
      return greetings.evening;
};