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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
  return trim(root, low, high);
};

function trim(node, low, high) {
  if (!node) {
    return node;
  }
  if (node.val > high) {
    return trim(node.left, low, high);
  }
  if (node.val < low) {
    return trim(node.right, low, high);
  }
  node.left = trim(node.left, low, high);
  node.right = trim(node.right, low, high);

  return node;
}


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
let root = new TreeNode(3, new TreeNode(0, null, new TreeNode(2, new TreeNode(1))), new TreeNode(4));
let node = trimBST(root, 0, 1);
console.log(node);
