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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let prev = null;
  let big = null;
  let small = null;
  function traverse(node) {
    if (!node) {
      return;
    }
    traverse(node.left);
    if (prev && prev.val > node.val) {
      small = node;
      if (!big) {
        big = prev;
      } else {
        return;
      }
    }
    prev = node;
    traverse(node.right);
  }
  traverse(root);
  [big.val, small.val] = [small.val, big.val];
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// let root = new TreeNode(1, new TreeNode(3, null, new TreeNode(2)));
let root = new TreeNode(3, new TreeNode(1), new TreeNode(4, new TreeNode(2)));
recoverTree(root);
console.log(root);
