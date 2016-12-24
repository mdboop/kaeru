import {
  cardBuilder,
  downloadCard,
} from './Card';

const requestMap = {
  REQUEST_CARD: cardBuilder,
  DOWNLOAD_CARD: downloadCard,
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (Object.hasOwnProperty.call(requestMap, request.type)) {
    requestMap[request.type]({ request, sendResponse });
  }
});
