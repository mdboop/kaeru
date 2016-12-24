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

const removeWhiteSpace = (s) => s.replace(/\s+/g, '-');
const commasToDashes = (s) => s.replace(/(\/|,)/g, '');
const removeColons = (s) => s.replace(/:/g, '');
const prependName = (n) => (s) => `${n}_${s}`;

export const genStandardFileName = _.compose(
  prependName('kaeru-card'),
  removeColons,
  commasToDashes,
  removeWhiteSpace,
  genNumericDateString,
  appendExtension
);
