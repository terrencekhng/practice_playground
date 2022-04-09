/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let newLessNode = new ListNode();
  let lessNodeHead = newLessNode;
  let newLargeNode = new ListNode();
  let largeNodeHead = newLargeNode;
  let current = head;
  while (current) {
    if (current.val >= x) {
      newLargeNode.next = new ListNode();
      newLargeNode = newLargeNode.next;
      newLargeNode.val = current.val;
    } else {
      newLessNode.next = new ListNode();
      newLessNode = newLessNode.next;
      newLessNode.val = current.val;
    }
    current = current.next;
  }
  newLessNode.next = largeNodeHead;
  return lessNodeHead;
};
