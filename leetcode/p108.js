/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  let root = constructBST(nums, 0, nums.length);
  return root;
};

function constructBST(array, left, right) {
  if (left === right) {
    return null;
  }
  let mid = Math.floor((left + right) / 2);
  let node = new TreeNode(array[mid]);
  node.left = constructBST(array, left, mid);
  node.right = constructBST(array, mid + 1, right);
  return node;
}
