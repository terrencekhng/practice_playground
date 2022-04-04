/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let leftNode = head;
  let rightNode = head;
  let counter = 1;
  while (counter < left) {
    leftNode = leftNode.next;
    counter += 1;
  }
  rightNode = leftNode;
  while (left < right) {
    rightNode = getRightNode(leftNode, right - left);
    let temp = leftNode.val;
    leftNode.val = rightNode.val;
    rightNode.val = temp;
    leftNode = leftNode.next;
    left += 1;
    right -= 1;
  }
  return head;
};

function getRightNode(leftNode, distance) {
  let counter = 0;
  let rightNode = leftNode;
  while (counter < distance) {
    rightNode = rightNode.next;
    counter += 1;
  }
  return rightNode;
}
