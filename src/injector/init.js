import {
  findExactBlock,
  // cloneNode,
  getSeeAlsoTags,
  removeNodes,
  getFrontText,
} from './cardBuilder';

const genId = () => ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4); // eslint-disable-line

const requestMap = {
  REQUEST_CARD: (responder) => {
    const exactBlock = findExactBlock().cloneNode(true);
    removeNodes(getSeeAlsoTags(exactBlock));
    const frontNode = getFrontText(exactBlock);
    const a = document.createElement('a');
    const cardFront = frontNode.textContent;
    const cardBack = exactBlock.innerHTML.replace(/;/g, '&#59;');
    const card = `${cardFront};${cardBack}`;
    const blob = new Blob([card], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = `${genId()}.html`;
    a.click();
    responder({ payload: url });
  },
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (Object.hasOwnProperty.call(requestMap, request.type)) {
    requestMap[request.type](sendResponse);
  }
});
