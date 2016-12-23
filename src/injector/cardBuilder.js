
export const cloneNode = (node) => node.cloneNode(true);

export const findExactBlock = () =>
  document.querySelector('.exact_block');

export const findResultTitle = node => node.querySelector('.text');

export const getPartOfSpeech = node => node.querySelector('.meaning-tags');

export const getSeeAlsoTags = node => node.querySelectorAll('.tags-see_also');

export const getFrontText = node => node.querySelector('.concept_light-representation').querySelector('.text');

export const removeNodes = nodes => nodes.forEach(node => node.remove());

export const Node = (node) => ({
  map: (f) => Node(f(node)),
  fold: (f) => f(node),
});
