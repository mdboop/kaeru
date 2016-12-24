import _ from 'ramda';

const createBlob = (type) => (contents) => new Blob([contents], { type });
const createUrl = (blob) => window.URL.createObjectURL(blob);

export const createDownloadUrl = _.compose(createUrl, createBlob('text/plain'));
