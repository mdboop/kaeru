// const nodeTypeChecker = (n) => n instanceof HTMLElement;

const Node = x => ({
  map: f => Node(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`,
});

export default Node;
