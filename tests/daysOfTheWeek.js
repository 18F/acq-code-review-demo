const tap = require('tap');
const target = require('../lib/daysOfTheWeek');

tap.test('getDayName', (getDayNameTest) => {
  getDayNameTest.throws(() => target.getDayName(), 'throws when using no input');
  getDayNameTest.throws(() => target.getDayName(null), 'throws when using a null input');
  getDayNameTest.throws(() => target.getDayName(undefined), 'throws when using an undefined input');
  getDayNameTest.throws(() => target.getDayName('string'), 'throws when using a string input');
  getDayNameTest.throws(() => target.getDayName([]), 'throws when using an array input');
  getDayNameTest.throws(() => target.getDayName({}), 'throws when using an object input');
  getDayNameTest.throws(() => target.getDayName(true), 'throws when using a boolean input');

  const validDateObject = new Date(2017, 6, 23);
  const validDateValue = validDateObject.getTime();
  getDayNameTest.equal(target.getDayName(validDateValue), 'Friday', 'get expected day name when using a Date timestamp');
  getDayNameTest.equal(target.getDayName(validDateObject), 'Friday', 'get expected day name when using a Date object');
  getDayNameTest.end();
});
