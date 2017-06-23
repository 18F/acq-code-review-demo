module.exports.getDayName = (date) => {
  if (Object.prototype.toString.call(date) !== '[object Date]' && Number.isNaN(Number(date))) {
    throw new Error('Date argument must be a Date object or a Javascript epoch timestamp');
  } else if (Array.isArray(date) || date === null || date === true || date === false) {
    throw new Error('Date argument must be a Date object or a Javascript epoch timestamp');
  }

  const passedDate = new Date(date);

  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][passedDate.getDay()];
};

module.exports.next = (dow) => {
  const dows = ['Sunday','Monday','Tuesday',  'Wednesday','Thursday', "Friday",'Saturday'];
  let days = (dows.indexOf(dow)-(new Date()).getDay());
  if (days < 0) days+=7;
  if (dows.includes(dow)) return new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate() + days);
  throw new Error('no such day');
};
