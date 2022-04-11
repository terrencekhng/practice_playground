/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) {
    return head;
  }
  let isDupBefore = false;
  let prev = head;
  let mid = head;
  let current = head.next;
  let prevDupVal = null;
  while (current) {
    if (mid.val === current.val) {
      isDupBefore = true;
      prevDupVal = current.val;
      current = current.next;
    } else {
      if (prev === head && isDupBefore && prev.val === prevDupVal) {
        head = current;
        prev = head;
        mid = current;
        current = current.next;
        isDupBefore = false;
        continue;
      }
      if (isDupBefore) {
        prev.next = current;
        mid = current;
        current = current.next;
        isDupBefore = false;
      } else {
        prev = mid;
        mid = current;
        current = current.next;
      }
    }
  }

  // Last element is processed here
  if (prev === head && isDupBefore && prev.val === prevDupVal) {
    head = current;
    prev = head;
    mid = current;
    isDupBefore = false;
  }
  if (isDupBefore) {
    prev.next = current;
    mid = current;
  } else {
    prev = mid;
    mid = current;
  }

  return head;
};
