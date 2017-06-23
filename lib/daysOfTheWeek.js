module.exports.getDayName = (date) => {
  if (Object.prototype.toString.call(date) !== '[object Date]' && Number.isNaN(Number(date))) {
    throw new Error('Date argument must be a Date object or a Javascript epoch timestamp');
  } else if (Array.isArray(date) || date === null || date === true || date === false) {
    throw new Error('Date argument must be a Date object or a Javascript epoch timestamp');
  }
};
