
import { genStandardFileName } from './utils';

const cloneNode = (node) => node.cloneNode(true);

const findExactBlock = () =>
  document.querySelector('.exact_block');

const findResultTitle = node => node.querySelector('.text');

const getPartOfSpeech = node => node.querySelector('.meaning-tags');

const getSeeAlsoTags = node => node.querySelectorAll('.tags-see_also');

const getFrontText = node => node.querySelector('.concept_light-representation').querySelector('.text');

const removeNodes = nodes => nodes.forEach(node => node.remove());

const Node = (node) => ({
  map: (f) => Node(f(node)),
  fold: (f) => f(node),
});

export const cardBuilder = ({ sendResponse }) => {
  const exactBlock = findExactBlock().cloneNode(true);

  // mutative nonsense to improve
  removeNodes(getSeeAlsoTags(exactBlock));
  exactBlock.querySelector('h4').remove();
  exactBlock.querySelectorAll('a').forEach(node => node.remove());

  const frontNode = getFrontText(exactBlock);
  const cardFront = frontNode.textContent.trim();
  const cardBack = exactBlock.innerHTML
    // TODO: change all these comments to chainable functions.
    // tabs -> space
    .replace(/\t/g, ' ')
    // add extra double quotes for anki
    .replace(/"/g, '""')
    // strip whitespace from between tags
    .replace(/>\s+</g, '><')
    // trim whitespace between tags with text
    .replace(/>\s+(.+)\s+</g, '>$1<')
    // trim whitespace at the beginning and end
    .trim();
  const card = `${cardFront} "${cardBack}"`;

  sendResponse({ payload: card });
};

export const downloadCard = ({ sendResponse, request }) => {
  const card = request.payload;
  const blob = new Blob([card], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);

  const downloadLink = document.createElement('a');

  downloadLink.href = url;
  downloadLink.download = genStandardFileName('txt');

  downloadLink.click();

  sendResponse({ payload: true });
};
