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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  let result = new TreeNode();
  let resultRoot = result;
  function traverse(node) {
    if (!node) {
      return;
    }
    traverse(node.left);
    result.right = new TreeNode(node.val);
    result = result.right;
    traverse(node.right);
  }
  traverse(root);
  return resultRoot.right;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

let root = new TreeNode(5, new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)), new TreeNode(6, null, new TreeNode(8, new TreeNode(7), new TreeNode(9))));
let node = increasingBST(root);
console.log(node);
