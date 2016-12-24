/* eslint-disable no-param-reassign */

import { walk } from '../utils/dom-walker';

const findExactBlock = () => document.querySelector('.exact_block');

// const getPartOfSpeech = node => node.querySelector('.meaning-tags');

const getSeeAlsoTags = node => node.querySelectorAll('.tags-see_also');

const getFrontText = node => node.querySelector('.concept_light-representation').querySelector('.text');

const removeNodes = nodes => nodes.forEach(node => node.remove());

const addListStyles = (root) => walk(root, (n) => {
  if (n.tagName === 'LI') {
    n.style.cssText = 'display: inline-block;';
  }
});

const styleMeaningTags = (node) => node.querySelectorAll('.meanings-wrapper').forEach((n) => {
  n.querySelector('.meaning-tags').style.cssText = 'font-size: 12px; color: #999;';
});

const addJapaneseFontFamily = (root) => walk(root, (n) => {
  if (n.classList.contains('japanese')) {
    n.style.cssText = `font-family:
      "HiraKakuPro-W3",
      "Hiragino Kaku Gothic Pro W3",
      "Hiragino Kaku Gothic Pro",
      "ヒラギノ角ゴ Pro W3",
      "メイリオ",
      Meiryo,
      "游ゴシック",
      YuGothic,
      "ＭＳ Ｐゴシック",
      "MS PGothic",
      "ＭＳ ゴシック",
      "MS Gothic",
      sans-serif;
    `;
  }
});

const addFuriganaStyles = (root) => walk(root, (n) => {
  if (n.classList.contains('furigana')) {
    n.style.cssText = 'display: block; font-size: 12px;';
  }
});

/**
 * Card Builder
 */

const buildCard = () => {
  const root = findExactBlock().cloneNode(true);

  // mutative nonsense to improve
  removeNodes(getSeeAlsoTags(root));
  addListStyles(root);
  addFuriganaStyles(root);
  addJapaneseFontFamily(root);
  styleMeaningTags(root);
  root.querySelector('h4').remove();
  root.querySelectorAll('a').forEach(node => node.remove());

  const frontNode = getFrontText(root);
  const cardFront = frontNode.textContent.trim();
  const cardBack = root.innerHTML
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

  return card;
};

export const cardRequestHandler = ({ sendResponse }) => sendResponse({ payload: buildCard() });
