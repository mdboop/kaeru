import {
  cardRequestHandler,
} from './Card';

const requestMap = {
  REQUEST_CARD: cardRequestHandler,
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (Object.hasOwnProperty.call(requestMap, request.type)) {
    requestMap[request.type]({ request, sendResponse });
  }
});
