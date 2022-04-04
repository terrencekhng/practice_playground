/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
  let first = head;
  let second = head;
  let counter = 1;
  let leftNode = head;
  let rightNode = head;
  while (counter !== k) {
    first = first.next;
    counter += 1;
    leftNode = first;
  }
  while (first.next) {
    first = first.next;
    second = second.next;
  }
  rightNode = second;
  let temp = leftNode.val;
  leftNode.val = rightNode.val;
  rightNode.val = temp;
  return head;
};
