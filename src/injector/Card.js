/* eslint-disable no-param-reassign */

import _ from 'ramda';

const findExactBlock = () => document.querySelector('.exact_block');

const getSeeAlsoTags = node => node.querySelectorAll('.tags-see_also');

const getFrontText = node => node.querySelector('.concept_light-representation').querySelector('.text');

const removeNodes = nodes => nodes.forEach(node => node.remove());

const applyStyleToAllNodes = ({ query, style }) => (node) => {
  node.querySelectorAll(query).forEach(n => { n.style.cssText = style; });
  return node;
};

const styleListItems = applyStyleToAllNodes({ query: 'li', style: 'display: inline-block' });
const styleMeaningTags = applyStyleToAllNodes({ query: '.meanings-wrapper', style: 'font-size: 12px; color: #999;' });
const styleUsageTags = applyStyleToAllNodes({ query: '.sense-tag.tag-tag', style: 'font-size: 14px; color: #999;' });
const styleCategoryTags = applyStyleToAllNodes({ query: '.concept_light-tag.label', style: 'font-size: 14px;' });
const styleJapaneseText = applyStyleToAllNodes({ query: '.japanese', style: `font-family:
  "HiraKakuPro-W3", "Hiragino Kaku Gothic Pro W3", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
  "メイリオ", Meiryo, "游ゴシック", YuGothic, "ＭＳ Ｐゴシック", "MS PGothic", "ＭＳ ゴシック", "MS Gothic", sans-serif;`,
});
const styleFurigana = applyStyleToAllNodes({ query: '.furigana', style: 'display: block; font-size: 12px;' });
/**
 * Card Builder
 */

const applyAllStyles = _.compose(
  styleCategoryTags,
  styleUsageTags,
  styleMeaningTags,
  styleJapaneseText,
  styleFurigana,
  styleListItems
);

const buildCard = () => {
  const root = findExactBlock().cloneNode(true);

  // mutative nonsense to improve
  removeNodes(getSeeAlsoTags(root));
  applyAllStyles(root);
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
