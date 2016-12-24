import _ from 'ramda';

const appendExtension = (ext = 'txt') => `.${ext}`;

const genNumericDateString = (s) => `${new Date().toLocaleString({
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
})}${s}`;

const formatDateString = (s) => s.replace(/(\/|,?\s+)/g, '-');

const insertDate = (s) => `kaeru-card_${s}`;

export const genStandardFileName = _.compose(insertDate, formatDateString, genNumericDateString, appendExtension);
