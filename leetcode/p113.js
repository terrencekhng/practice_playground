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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  if (!root) {
    return [];
  }
  let result = [];
  let currentSum = 0;
  let path = [];
  function traverse(node) {
    if (!node) {
      return;
    }

    if (currentSum + node.val === targetSum && node && !node.left && !node.right) {
      path.push(node.val);
      result.push(path.slice());
      path.pop();
      return;
    }

    path.push(node.val);
    currentSum += node.val;

    traverse(node.left);

    if (node.right) {
      traverse(node.right);
    }
    path.pop();
    currentSum -= node.val;

  }
  traverse(root);
  return result;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// let root = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4, new TreeNode(5), new TreeNode(1))));
let root = new TreeNode(-2, null, new TreeNode(-3));
let targetSum = -5;
let result = pathSum(root, targetSum);
console.log(result);
