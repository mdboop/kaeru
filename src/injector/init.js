import {
  findExactBlock,
  // cloneNode,
  getSeeAlsoTags,
  removeNodes,
  getFrontText,
} from './cardBuilder';

const cardBuilder = ({ sendResponse }) => {
  const exactBlock = findExactBlock().cloneNode(true);
  removeNodes(getSeeAlsoTags(exactBlock));
  exactBlock.querySelector('h4').remove();
  exactBlock.querySelectorAll('a').forEach(node => node.remove());
  const frontNode = getFrontText(exactBlock);
  const cardFront = frontNode.textContent.trim();
  const cardBack = exactBlock.innerHTML
    .replace(/\t/g, ' ')
    .replace(/"/g, '""')
    .replace(/>\s+</g, '><')
    .replace(/>\s+(.+)\s+</g, '>$1<')
    .trim();
  const card = `${cardFront} "${cardBack}"`;

  sendResponse({ payload: card });
};

const downloadCard = ({ sendResponse, request }) => {
  const card = request.payload;
  const blob = new Blob([card], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = `${genId()}.txt`;
  downloadLink.click();
  sendResponse({ payload: true });
};

const genId = () => ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4); // eslint-disable-line

const requestMap = {
  REQUEST_CARD: cardBuilder,
  DOWNLOAD_CARD: downloadCard,
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (Object.hasOwnProperty.call(requestMap, request.type)) {
    requestMap[request.type]({ request, sendResponse });
  }
});
