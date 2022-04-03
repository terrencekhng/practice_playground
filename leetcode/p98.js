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
 * @return {boolean}
 */
var isValidBST = function(root) {
  return validate(root);
};

function validate(
  node,
  lowerBound = -Infinity,
  upperBound = Infinity
) {
  if (!node) {
    return true;
  }

  if (node.val >= upperBound || node.val <= lowerBound) {
    return false;
  }

  return validate(node.left, lowerBound, node.val) && validate(node.right, node.val, upperBound);
}
