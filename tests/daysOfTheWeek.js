const tap = require('tap');
const target = require('../lib/daysOfTheWeek');
const mockdate = require('mockdate');

tap.test('getDayName', (getDayNameTest) => {
  getDayNameTest.throws(() => target.getDayName(), 'throws when using no input');
  getDayNameTest.throws(() => target.getDayName(null), 'throws when using a null input');
  getDayNameTest.throws(() => target.getDayName(undefined), 'throws when using an undefined input');
  getDayNameTest.throws(() => target.getDayName('string'), 'throws when using a string input');
  getDayNameTest.throws(() => target.getDayName([]), 'throws when using an array input');
  getDayNameTest.throws(() => target.getDayName({}), 'throws when using an object input');
  getDayNameTest.throws(() => target.getDayName(true), 'throws when using a boolean input');

  // Javascript months start at 0, so month 5 is actually June.
  const validDateObject = new Date(2017, 5, 23);
  const validDateValue = validDateObject.getTime();
  getDayNameTest.equal(target.getDayName(validDateValue), 'Friday', 'get expected day name when using a Date timestamp');
  getDayNameTest.equal(target.getDayName(validDateObject), 'Friday', 'get expected day name when using a Date object');
  getDayNameTest.end();
});

tap.test('next function', (nextTests) => {
  const testDate = new Date(2017, 5, 23);
  mockdate.set(testDate);
  const expectedDate = new Date(2017, 5, 25);

  nextTests.throws(() => target.next('January'), 'throws when input is not a day of the week');
  nextTests.equal(target.next('Sunday').getTime(), expectedDate.getTime(), 'get expected date for next Sunday');

  nextTests.end();
  mockdate.reset();
});
