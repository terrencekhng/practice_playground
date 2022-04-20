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
 */
var BSTIterator = function(root) {
  this.inorderHead = new ListNode(-1);
  this.current = this.inorderHead;
  const that = this;
  function inorder(node) {
    if (!node) {
      return;
    }
    inorder(node.left);
    let newNode = new ListNode(node.val);
    that.current.next = newNode;
    that.current = that.current.next;
    inorder(node.right);
  }
  inorder(root);
  this.current = this.inorderHead;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  if (!this.current.next) {
    return null;
  }
  const result = this.current.next.val;
  this.current = this.current.next;
  return result;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return !!this.current.next;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function ListNode(val) {
  this.val = (val===undefined ? 0 : val);
  this.next = null;
}

let root = new TreeNode(7, new TreeNode(3), new TreeNode(15, new TreeNode(9), new TreeNode(20)));
const bSTIterator = new BSTIterator(root);
console.log(bSTIterator.next());    // return 3
console.log(bSTIterator.next());    // return 7
console.log(bSTIterator.hasNext()); // return True
console.log(bSTIterator.next());    // return 9
console.log(bSTIterator.hasNext()); // return True
console.log(bSTIterator.next());    // return 15
console.log(bSTIterator.hasNext()); // return True
console.log(bSTIterator.next());    // return 20
console.log(bSTIterator.hasNext()); // return False

