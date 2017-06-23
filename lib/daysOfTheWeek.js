module.exports.getDayName = (date) => {
  if (Object.prototype.toString.call(date) !== '[object Date]' && Number.isNaN(Number(date))) {
    throw new Error('Date argument must be a Date object or a Javascript epoch timestamp');
  } else if (Array.isArray(date) || date === null || date === true || date === false) {
    throw new Error('Date argument must be a Date object or a Javascript epoch timestamp');
  }

  const passedDate = new Date(date);

  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][passedDate.getDay()];
};

module.exports.isWeekend = (date) => {
  if (Object.prototype.toString.call(date) !== '[object Date]' && Number.isNaN(Number(date))) {
    throw new Error('Date argument must be a Date object or a Javascript epoch timestamp');
  } else if (Array.isArray(date) || date === null || date === true || date === false) {
    throw new Error('Date argument must be a Date object or a Javascript epoch timestamp');
  }

  const passedDate = new Date(date);
  const dayOfTheWeek = passedDate.getDay();

  return (dayOfTheWeek === 0 || dayOfTheWeek === 6);
}
