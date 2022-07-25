export const timeGetter = (time) => {
  var hrs = time.getHours();
  var mnts = time.getMinutes();
  var AMPM = hrs >= 12 ? 'PM' : 'AM';
  hrs = hrs % 12;
  hrs = hrs ? hrs : 12;
  mnts = mnts < 10 ? '0' + mnts : mnts;
  var result = hrs + ':' + mnts + ' ' + AMPM;
  return result;
};

export const dateGetter = (date) => {
  // let conDate = new Date(date);
  const isDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

  return isDate;
};
