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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let result = [];
  if (!root) {
    return [];
  }
  let queue = [{node: root, level: 1}];
  let currentLevel = 0;
  while (queue.length > 0) {
    let _node = queue.shift();
    if (currentLevel === _node.level - 1) {
      result.push([_node.node.val]);
    } else {
      result[result.length - 1].push(_node.node.val);
    }
    currentLevel = _node.level;
    if (_node.node.left) {
      queue.push({node: _node.node.left, level: _node.level + 1});
    }
    if (_node.node.right) {
      queue.push({node: _node.node.right, level: _node.level + 1});
    }
  }
  return result;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

let root = new TreeNode(3, new TreeNode(9, new TreeNode(11), new TreeNode(12)), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
let result = levelOrder(root);
console.log(result);
