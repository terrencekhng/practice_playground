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
 * @return {number}
 */
var maxDepth = function(root) {
  let depth = 0;
  let max = 0;
  function traverse(node) {
    if (!node) {
      max = Math.max(max, depth);
      return;
    }
    depth += 1;
    traverse(node.left);
    traverse(node.right);
    depth -= 1;
  }
  traverse(root);
  return max;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

let root = new TreeNode(3, new TreeNode(9, new TreeNode(11), new TreeNode(12)), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
// let root = new TreeNode(1, null, new TreeNode(2));
let depth = maxDepth(root);
console.log(depth);
