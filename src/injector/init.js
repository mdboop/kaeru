const requestMap = {
  createCard: (responder) => {
    console.log('something');
    responder();
  },
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (Object.hasOwnProperty.call(requestMap, request)) {
    requestMap[request](sendResponse);
  }
});
