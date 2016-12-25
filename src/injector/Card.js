import removeNodes from './remove';
import styleNodes from './style';

const findExactBlock = () => document.querySelector('.exact_block');
const getFrontText = node => node.querySelector('.concept_light-representation').querySelector('.text');

const buildCard = () => {
  const root = findExactBlock().cloneNode(true);

  styleNodes(root);
  removeNodes(root);

  const frontNode = getFrontText(root);
  const cardFront = frontNode.textContent.trim();
  const cardBack = root.innerHTML
    .replace(/\t/g, ' ')
    .replace(/"/g, '""')
    .replace(/>\s+</g, '><')
    .replace(/>\s+(.+)\s+</g, '>$1<')
    .trim();
  const card = `${cardFront} "${cardBack}"`;

  return card;
};

export const cardRequestHandler = ({ sendResponse }) => sendResponse({ payload: buildCard() });
