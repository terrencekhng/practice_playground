/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  let array = listToArray(head);
  let root = constructBST(array, 0, array.length);
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

function listToArray(head) {
  let array = [];
  let current = head;
  while (current) {
    array.push(current.val);
    current = current.next;
  }

  return array;
}

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

let list = new ListNode(-10, new ListNode(-3, new ListNode(0, new ListNode(5, new ListNode(9)))));
let root = sortedListToBST(list);
console.log(root);
