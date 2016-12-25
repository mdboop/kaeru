// :,( mutation, but let's leave it for now.
export const walk = (cb, n) => {
  cb(n);
  if (n.children.length) {
    Array.prototype.forEach.call(n.children, node => walk(cb, node));
  }
  return n;
};

export const filterWalk = (cb, predicate, n) => {
  if (n.children.length && predicate(n)) {
    cb(n);
    Array.prototype.forEach.call(n.children, node => walk(cb, predicate, node));
  }
  return n;
};
