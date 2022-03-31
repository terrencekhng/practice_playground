class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length -= 1;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let currentHead = this.head.next;
    this.head = currentHead;
    this.length -= 1;
    if (!this.length) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter += 1;
    }
    return currentNode;
  }

  set(index, val) {
    let currentNode = this.get(index);
    if (currentNode) {
      currentNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0) {
      return false;
    }
    if (index === 0) {
      return !!this.unshift(val);
    }
    if (index >= length) {
      return !!this.push(val);
    }
    if (index > 0 && index < length) {
      let newNode = new Node(val);
      let prev = this.get(index - 1);
      // newNode.next = prev.next;
      // prev.next = newNode;
      let temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length += 1;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length -= 1;
    return removed;
  }

  reverse() {

  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  /**
   * p2.1
   * Write code to remove duplicates from an unsorted linked list in place.
   */
  removeDuplicate() {
    let first = this.head;
    let second = null;
    let firstCounter = 0;
    let secondCounter = 0;

    while (first) {
      second = first.next;
      secondCounter = firstCounter + 1;
      while (second) {
        if (second.val === first.val) {
          second = second.next;
          this.remove(secondCounter);
        } else {
          second = second.next;
          secondCounter += 1;
        }
      }
      first = first.next;
      firstCounter += 1;
    }
  }

  /**
   * p2.2
   * Implement an algorithm to find the kth to last element of a singly linked list.
   * @param index
   */
  kthToLast(index) {
    let counter = index;
    while (counter < this.length) {
      let current = this.get(counter);
      console.log(current.val);
      counter += 1;
    }
  }

  /**
   * p2.3
   * Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.
   * EXAMPLE
   Input: the node c from the linked list a->b->c->d->e->f
   Result: nothing is returned, but the new linked list looks like a->b->d->e->f
   * @param node
   */
  deleteMiddleNode(node) {
    // if (this.length > 2) {
    //   let counter = 1;
    //   let current = this.head.next;
    //   while (current) {
    //     if (node.val === current.val) {
    //       this.remove(counter);
    //       return;
    //     } else {
    //       counter += 1;
    //       current = current.next;
    //     }
    //   }
    // }
    if (node === null || node.next === null) {
      return false;
    }
    let newNode = new Node(node.next.val);
    node.val = newNode.val;
    node.next = node.next.next;
    return true;
  }

  /**
   * p2.4
   * Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x (see below). The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.
   * @param val
   */
  partition(val) {
    if (this.length < 2) {
      return;
    }
    let current = this.head;
    let counter = 0;
    let index = 0;
    while (counter < this.length) {
      if (current.val >= val) {
        this.remove(index);
        this.push(current.val);
      } else {
        index += 1;
      }
      counter += 1;
      current = current.next;
    }
  }

  /**
   * p2.6
   * Implement a function to check if a linked list is a palindrome.
   * @return {boolean}
   */
  isPalindrome() {
    if (!this.length) {
      return false;
    }
    if (this.length === 1) {
      return true;
    }
    let first = 0;
    let last = this.length - 1;
    while (!((first === last - 1) || (first === last - 2))) {
      if (this.get(first).val !== this.get(last).val) {
        return false;
      }
      first += 1;
      last -= 1;
    }
    return true;
  }

  /**
   * p2.8
   * Given a circular linked list, implement an algorithm that returns the node at the
   beginning of the loop.
   DEFINITION
   Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.
   * @return {null|undefined}
   */
  loopDetection() {
    if (this.length) {
      let counter = 0;
      let current = this.head;
      while (current) {
        if (counter === this.length) {
          return current;
        }
        current = current.next;
        counter += 1;
      }
    }
    return undefined;
  }
}

/**
 * p2.5
 * You have two numbers represented by a linked list,where each node contains a single digit. The digits are stored in reverse order,such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.
 * @param list1
 * @param list2
 * @return {SinglyLinkedList}
 */
function sumBackward(list1, list2) {
  let carry = 0;
  let list1Current = list1.head;
  let list2Current = list2.head;
  let result = new SinglyLinkedList();
  while (list1Current || list2Current) {
    let left = list1Current ? list1Current.val : 0;
    let right = list2Current ? list2Current.val : 0;
    let temp = (left + right + carry);
    let newVal = temp % 10;
    carry = temp >= 10 ? 1 : 0;
    result.push(newVal);
    if (list1Current) {
      list1Current = list1Current.next;
    }
    if (list2Current) {
      list2Current = list2Current.next;
    }
  }

  if (carry > 0) {
    result.push(1);
  }

  return result;
}

/**
 * p2.5 Follow-up
 * Suppose the digits are stored in forward order. Repeat the above problem.
 * @param list1
 * @param list2
 * @return {SinglyLinkedList}
 */
function sumForward(list1, list2) {
  console.log('length 1: ', list1.length, 'length 2: ', list2.length);
  const len1 = list1.length;
  const len2 = list2.length;
  if (len1 < len2) {
    for (let i = 0; i < len2 - len1; ++i) {
      list1.unshift(0);
    }
  } else if (len1 > len2) {
    for (let i = 0; i < len1 - len2; ++i) {
      list2.unshift(0);
    }
  }

  function addListHelper(node1, node2) {
    if (!node1 && !node2) {
      return {
        sum: new SinglyLinkedList(),
        carry: 0,
      };
    }
    let sum = addListHelper(node1.next, node2.next);
    let newVal = (node1.val + node2.val + sum.carry);
    sum.sum = sum.sum.unshift(newVal % 10);
    sum.carry = newVal >= 10 ? 1 : 0;
    return sum;
  }

  let list1Current = list1.head;
  let list2Current = list2.head;
  const result = addListHelper(list1Current, list2Current);
  if (result.carry > 0) {
    result.sum.unshift(1);
  }

  return result.sum;
}


let list = new SinglyLinkedList();
list.push(2).push(8).push(2).push(8).push(1).push(1).push(7).push(8);
list.print();

console.log('kth to last');
list.kthToLast(2);

console.log('remove duplicates');

list.removeDuplicate();
list.print();

console.log('delete middle node');
let list2 = new SinglyLinkedList();
list2.push('a').push('b').push('c').push('d').push('e').push('f');
list2.deleteMiddleNode(list2.head.next);
list2.print();

console.log('partition');
console.log('before partition');
let list3 = new SinglyLinkedList();
list3.push(3).push(5).push(8).push(5).push(10).push(2).push(1);
list3.print();
console.log('after partition');
list3.partition(5);
list3.print();

console.log('is palindrome?');
let list4 = new SinglyLinkedList();
list4.push('a').push('b').push('c').push('b').push('a');
const result = list4.isPalindrome();
console.log(result);

console.log('loop detection');
let circularList = new SinglyLinkedList();
circularList.push('A').push('B').push('C').push('D').push('E');
circularList.tail.next = circularList.head.next.next;
// circularList.print();
const result1 = circularList.loopDetection();
if (result1) {
  console.log(result1.val);
} else {
  console.log(result1);
}

console.log('sum backward');
let num1 = '99';
let num2 = '99999';
let num1List = new SinglyLinkedList();
let num2List = new SinglyLinkedList();
for (let i = num1.length - 1; i >= 0; --i) {
  num1List.push(Number(num1[i]));
}
for (let i = num2.length - 1; i >= 0; --i) {
  num2List.push(Number(num2[i]));
}
let sumResult1 = sumBackward(num1List, num2List);
num1List.print();
num2List.print();
console.log('sum:');
sumResult1.print();

console.log('sum forward');
let num3 = '98';
let num4 = '99965';
let num3List = new SinglyLinkedList();
let num4List = new SinglyLinkedList();
for (let i = num3.length - 1; i >= 0; --i) {
  num3List.unshift(Number(num3[i]));
}
for (let i = num4.length - 1; i >= 0; --i) {
  num4List.unshift(Number(num4[i]));
}
num3List.print();
num4List.print();
let sumResult2 = sumForward(num3List, num4List);
console.log('sum:');
sumResult2.print();
