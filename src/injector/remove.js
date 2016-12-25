import _ from 'ramda';

const removeAllNodes = ({ query, predicate = () => true }) => (root) => {
  root.querySelectorAll(query).forEach(n => predicate(n) && n.remove());
  return root;
};

const removeSeeAlsoTags = removeAllNodes({ query: '.tag-see_also' });
const removeLinks = removeAllNodes({ query: 'a' });
const removeHeaders = removeAllNodes({ query: 'h4' });
const removeEmptyCategories = removeAllNodes({
  query: '.concept_light-tag.label',
  predicate: (n) => n.textContent === '',
});

const removeNodes = _.compose(removeEmptyCategories, removeSeeAlsoTags, removeLinks, removeHeaders);

export default removeNodes;
