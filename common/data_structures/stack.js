class Stack {
  constructor() {
    this.items = [];
    this.top = 0;
    this.currentMin = 0;
    this.minRecord = [];
  }

  push(val) {
    if (!this.top) {
      this.currentMin = val;
      this.minRecord[this.top] = val;
    }
    this.items.push(val);
    this.top += 1;
    if (val < this.currentMin) {
      this.currentMin = val;
      this.minRecord.push(val);
    } else {
      this.minRecord.push(this.currentMin);
    }
    return this;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('underflow');
    }
    this.top -= 1;
    this.currentMin = this.minRecord.pop();
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return !this.top;
  }

  printStack() {
    for (let i = 0; i < this.items.length; ++i) {
      console.log(this.items[i]);
    }
  }

  /**
   * p3.2
   * How would you design a stack which, in addition to push and pop, has a function min
   which returns the minimum element? Push, pop and min should all operate in O(1) time.
   * @return {*}
   */
  min() {
    return this.minRecord[this.top];
  }
}

class StackNode {
  constructor(value) {
    this.above = null;
    this.below = null;
    this.value = value;
  }
}

class NodeStack {
  constructor(maxSize) {
    this.size = 0;
    this.top = null;
    this.bottom = null;
    this.maxSize = maxSize;
  }

  peek() {
    if (this.top) {
      return this.top.value;
    }
    return undefined;
  }

  isFull() {
    return this.size === this.maxSize;
  }

  isEmpty() {
    return !this.size;
  }

  join(above, below) {
    if (below !== null) {
      below.above = above;
    }
    if (above !== null) {
      above.below = below;
    }
  }

  push(val) {
    if (this.isFull()) {
      // throw new Error('overflow');
      return false;
    }
    this.size += 1;
    let newNode = new StackNode(val);
    if (this.size === 1) {
      this.bottom = newNode;
    }
    this.join(newNode, this.top);
    this.top = newNode;
    return this;
  }

  pop() {
    if (this.size > 0) {
      let result = this.top.value;
      this.top = this.top.below;
      this.size -= 1;
      return result;
    }
    throw new Error('underflow');
    // return undefined;
  }

  printStack() {
    let current = this.top;
    while (current) {
      console.log(current.value);
      current = current.below;
    }
  }

  removeBottom() {
    let result = this.bottom.value;
    this.bottom = this.bottom.above;
    if (this.bottom !== null) {
      this.bottom.below = null;
    }
    this.size -= 1;
    return result;
  }

  /**
   * p3.5
   * Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.
   */
  sort() {
    let result = new NodeStack();
    while (!this.isEmpty()) {
      let temp = this.pop();
      while (!result.isEmpty() && temp < result.peek()) {
        this.push(result.pop());
      }
      result.push(temp);
    }
    while (!result.isEmpty()) {
      this.push(result.pop());
    }
  }
}

/**
 * p3.3
 * Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks. pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack).
 */
class SetOfNodeStacks {
  constructor() {
    this.stacks = [new NodeStack(5)];
    this.currentStackIndex = 0;
  }

  push(val) {
    if (this.stacks[this.currentStackIndex].isFull()) {
      this.stacks.push(new NodeStack(5));
      this.currentStackIndex += 1;
    }
    this.stacks[this.currentStackIndex].push(val);
    return this;
  }

  pop() {
    if (this.currentStackIndex <= 0 && this.stacks[this.currentStackIndex].isEmpty()) {
      this.stacks.pop();
    }
    try {
      return this.stacks[this.currentStackIndex].pop();
    } catch (e) {
      if (e.message === 'underflow') {
        this.currentStackIndex -= 1;
        return this.stacks[this.currentStackIndex].pop();
      }
    }
  }

  /**
   * p3.3 Follow-up
   * Implement a function popAt(int index) which performs a pop operation on a specific substack.
   * @param index
   * @return {undefined|*}
   */
  popAt(index) {
    if (index <= this.size() - 1 && index >= 0) {
      let result = this.stacks[index].pop();
      if (index < this.size() - 1) {
        for (let i = index + 1; i < this.size(); ++i) {
          let currentStack = this.stacks[i - 1];
          let bottom = this.stacks[i].removeBottom();
          currentStack.push(bottom);
        }
      }
      if (this.stacks[this.size() - 1].isEmpty()) {
        this.stacks.pop();
      }
      return result;
    }
    return undefined;
  }

  printStack() {
    for (let i = this.size() - 1; i >= 0; --i) {
      let current = this.stacks[i].top;
      while (current) {
        console.log(current.value);
        current = current.below;
      }
    }
  }

  size() {
    return this.stacks.length;
  }
}

class SetOfStacks {
  constructor() {
    this.stacks = [new Stack()];
    this.currentStackIndex = 0;
  }

  static get MAX_STACK_SIZE() {
    return 5;
  }

  push(val) {
    if (this.stacks[this.currentStackIndex].top > SetOfStacks.MAX_STACK_SIZE - 1) {
      this.stacks.push(new Stack());
      this.currentStackIndex += 1;
    }
    this.stacks[this.currentStackIndex].push(val);
    return this;
  }

  pop() {
    if (this.currentStackIndex <= 0 && !this.stacks[this.currentStackIndex].top) {
      throw new Error('underflow');
    }
    try {
      return this.stacks[this.currentStackIndex].pop();
    } catch (e) {
      if (e.message === 'underflow') {
        this.currentStackIndex -= 1;
        return this.stacks[this.currentStackIndex].pop();
      }
    }
  }

  popAt(index) {
    if (index > this.currentStackIndex) {
      throw new Error('underflow');
    }
    if (index === this.currentStackIndex) {
      let result = this.stacks[this.currentStackIndex].pop();
      if (this.stacks[this.currentStackIndex].isEmpty()) {
        this.stacks.pop();
        this.currentStackIndex -= 1;
      }
      return result;
    } else {

    }
  }

  printStacks() {
    for (let i = this.currentStackIndex; i >= 0; --i) {
      for (let j = this.stacks[i].top - 1; j >= 0; --j) {
        console.log(this.stacks[i].items[j]);
      }
    }
  }
}

let stack1 = new Stack();
// console.log(stack1.pop());
stack1.push(3).push(2).push(1);
stack1.printStack();
console.log('minimum: ', stack1.min());
stack1.printStack();
console.log('minimum: ', stack1.min());
stack1.push(2).push(3).push(4).push(5);
console.log('---');
stack1.printStack();
stack1.pop();
console.log('---');
stack1.printStack();
console.log('minimum: ', stack1.min());

// console.log('Set of stacks');
// let setOfStacks = new SetOfStacks();
// setOfStacks.push(1).push(2).push(3).push(4).push(5).push(6);
// setOfStacks.printStacks();
// console.log('pop');
// let val = setOfStacks.pop();
// console.log(val);
// let val2 = setOfStacks.pop();
// console.log(val2);
// setOfStacks.pop();
// setOfStacks.pop();
// setOfStacks.pop();
// let val3 = setOfStacks.pop();
// console.log(val3);
// // let val4 = setOfStacks.pop();
// // console.log(val4);
// console.log('pop at');
// let setOfStacks1 = new SetOfStacks();
// setOfStacks1.push(0).push(1).push(2).push(3).push(4).push(5).push(6).push(7).push(8).push(9).push(10);
// console.log('substack count: ', setOfStacks1.stacks.length);
// let val5 = setOfStacks1.popAt(2);
// console.log(val5);

console.log('set of stacks');
let setOfStacks = new SetOfNodeStacks();
setOfStacks.push(0).push(1).push(2).push(3).push(4).push(5).push(6).push(7).push(8).push(9).push(10);
setOfStacks.printStack();
console.log('pop at');
setOfStacks.popAt(0);
setOfStacks.printStack();
console.log('size: ', setOfStacks.size());

console.log('sort stack');
let originalStack = new NodeStack();
originalStack.push(5).push(2).push(10).push(11).push(8).push(1).push(3).push(7).push(6);
originalStack.printStack();
originalStack.sort();
console.log('sorted: ');
originalStack.printStack();
