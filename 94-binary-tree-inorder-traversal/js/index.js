// https://leetcode.com/problems/binary-tree-inorder-traversal

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];

    if(root == null) return result;

    const visited = [];
    let current = root;

    while(true) {
      if(current !== null) {
        visited.push(current);
        current = current.left
      } else if(visited.length > 0) {
        current = visited.pop();
        result.push(current.val);
        current = current.right;
      } else {
        break;
      }
    }

    return result;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}