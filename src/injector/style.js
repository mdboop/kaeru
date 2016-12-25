import _ from 'ramda';

const applyStyleToAllNodes = ({ query, style }) => (root) => {
  root.querySelectorAll(query).forEach(n => { n.style.cssText = style; }); // eslint-disable-line
  return root;
};

const styleListItems = applyStyleToAllNodes({ query: 'li', style: 'display: inline-block' });
const styleMainContainer = applyStyleToAllNodes({ query: '.concept_light.clearfix', style: 'text-align: left' });
const stylePartOfSpeech = applyStyleToAllNodes({ query: '.meanings-wrapper', style: 'font-size: 12px; color: #999;' });
const styleDefinitions = applyStyleToAllNodes({ query: '.meaning-meaning', style: 'font-size: 18px; color: #333' });
const styleExampleSentences = applyStyleToAllNodes({ query: '.unlinked', style: 'font-size: 16px; color: #333' });
const styleUsageTags = applyStyleToAllNodes({
  query: '.supplemental_info',
  style: 'font-size: 14px; color: #999; margin-left: 6px;',
});
const styleCategoryTags = applyStyleToAllNodes({ query: '.concept_light-tag.label', style: `
  font-size: 10px;
  color: #FFF;
  background-color: #90C0B7;
  border-radius: 3px;
  padding: 1px 6px;
  margin-right: 8px;
` });
const styleMeaningTags = applyStyleToAllNodes({ query: '.meaning-tags', style: 'margin-top: 6px;' });
const styleEnglish = applyStyleToAllNodes({ query: '.english', style: 'color: #666;' });
const styleJapaneseText = applyStyleToAllNodes({ query: '.japanese', style: `font-family:
  "HiraKakuPro-W3", "Hiragino Kaku Gothic Pro W3", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
  "メイリオ", Meiryo, "游ゴシック", YuGothic, "ＭＳ Ｐゴシック", "MS PGothic", "ＭＳ ゴシック", "MS Gothic", sans-serif;`,
});
const styleFurigana = applyStyleToAllNodes({
  query: '.furigana',
  style: 'display: block; font-size: 10px; margin-bottom: 2px;',
});

const styleEntryNumber = applyStyleToAllNodes({
  query: 'meaning-definition-section_divider',
  style: 'font-size: 14px; margin-right: 8px;',
});

const styleNodes = _.compose(
  styleDefinitions,
  styleMeaningTags,
  styleEntryNumber,
  styleExampleSentences,
  styleCategoryTags,
  styleUsageTags,
  stylePartOfSpeech,
  styleJapaneseText,
  styleFurigana,
  styleListItems,
  styleEnglish,
  styleMainContainer,
);

export default styleNodes;
