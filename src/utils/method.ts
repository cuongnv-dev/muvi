import moment from 'moment';

export const phoneRegex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const getFlagEmoji = (countryCode?: string) => {
  if (!countryCode) return '?';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char, index) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

export const numberWithCommasDecimal = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getMessageDate = (date: string): string => {
  const duration = moment.duration(moment().diff(moment(date, 'YYYY-MM-DD')));
  if (duration.asDays() >= 2) {
    return moment(date).format('MM/DD');
  }
  if (duration.asDays() >= 1) {
    return 'yesterday';
  }
  return moment(date).format('HH:mm');
};

export const getRuntime = (runTime: number): string => {
  if (runTime >= 24 * 60 || runTime < 0) {
    throw new RangeError(
      'Valid input should be greater than or equal to 0 and less than 1440.'
    );
  }
  var h = (runTime / 60) | 0,
    m = runTime % 60 | 0;
  return `${h}h ${m}m`;
};
