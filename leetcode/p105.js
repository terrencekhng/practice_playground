/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  let hash = {};
  for (let i = 0; i < inorder.length; ++i) {
    hash[inorder[i]] = i;
  }

  let preorderIndex = 0;
  function arrayToTree(preorder, left, right) {
    if (left > right) {
      return null;
    }
    let root = new TreeNode(preorder[preorderIndex++]);

    root.left = arrayToTree(preorder, left, hash[root.val] - 1);
    root.right = arrayToTree(preorder, hash[root.val] + 1, right);

    return root;
  }
  return arrayToTree(preorder, 0, preorder.length - 1);
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

let preorder = [1,2,4,5,8,9,3,7];
let inorder = [4,2,8,5,9,1,7,3];
let root = buildTree(preorder, inorder);
console.log(root);

