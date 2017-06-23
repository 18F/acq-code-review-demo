const tap = require('tap');
const target = require('../lib/daysOfTheWeek');

tap.test('getDayName', (getDayNameTest) => {
  getDayNameTest.throws(() => target.getDayName(null), 'throws when using a null input');
  getDayNameTest.throws(() => target.getDayName('string'), 'throws when using a string input');
  getDayNameTest.throws(() => target.getDayName([]), 'throws when using an array input');
  getDayNameTest.throws(() => target.getDayName({}), 'throws when using an object input');
  getDayNameTest.throws(() => target.getDayName(true), 'throws when using a boolean input');

  // Javascript months start at 0, so month 5 is actually June.
  const validDateObject = new Date(2017, 5, 23);
  const validDateValue = validDateObject.getTime();
  getDayNameTest.equal(target.getDayName(validDateValue), 'Friday', 'get expected day name when using a Date timestamp');
  getDayNameTest.equal(target.getDayName(validDateObject), 'Friday', 'get expected day name when using a Date object');
  getDayNameTest.equal(target.getDayName(), target.getDayName(new Date()), 'get expected day name when using no input');
  getDayNameTest.end();
});
