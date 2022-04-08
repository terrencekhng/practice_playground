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
var rotateRight = function(head, k) {
  if (!head) {
    return head;
  }
  let length = 0;
  let current = head;
  let tail = null;
  while (current) {
    tail = current;
    current = current.next;
    length += 1;
  }
  let realK = k % length;
  head = rotateHelper(head, tail, realK, length);
  return head;
};

function rotateHelper(head, tail, k, length) {
  if (k === 0) {
    return head;
  }
  let current = head;
  let counter = 0;
  while (counter < length - k - 1) {
    current = current.next;
    counter += 1;
  }
  tail.next = head;
  let next = current.next;
  current.next = null;
  head = next;
  return head;
}

