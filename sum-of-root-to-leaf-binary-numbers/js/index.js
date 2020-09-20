// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers

var sumRootToLeaf = function (root) {
  const valsAll = [];
  let sum = 0;
  visitNode(root, valsAll);

  for (const vals of valsAll) {
    const len = vals.length;
    let valsAsNumber = 0
    for (let i = len - 1; i >= 0; i--) {
      const val = vals[i];
      const pow = len - i - 1;

      valsAsNumber += Math.pow(2, pow) * val
    }

    sum += valsAsNumber;
  }

  return sum;
};

var visitNode = function (node, vals) {
  node.prevs = node.prevs || [];
  node.prevs.push(node.val)

  if (node.left) {
    node.left.prevs = [...node.prevs]
    visitNode(node.left, vals)
  }

  if (node.right) {
    node.right.prevs = [...node.prevs]
    visitNode(node.right, vals)
  }

  if (!node.right && !node.left) {
    vals.push(node.prevs)
  }
}