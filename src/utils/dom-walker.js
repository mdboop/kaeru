// :,( mutation, but let's leave it for now.
export const walk = (n, cb) => {
  cb(n);
  if (n.children.length) {
    Array.prototype.forEach.call(n.children, node => walk(node, cb));
  }
  return n;
};
