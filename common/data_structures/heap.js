class MinHeap {
  constructor() {
    this.level = 0;
    this.items = [];
    this.size = 0;
  }

  insert(val) {
    this.items.push(val);
    this.size += 1;
    this.level = Math.floor(Math.log2(this.size)) + 1;
    if (this.size > 1) {
      let lastIndex = this.size - 1;
      for (let i = this.level; i > 1; --i) {
        let parentIndex = Math.floor((lastIndex - 1) / 2);
        let parent = this.items[parentIndex];
        if (val < parent) {
          let temp = val;
          this.items[lastIndex] = parent;
          this.items[parentIndex] = temp;
          lastIndex = parentIndex;
          continue;
        }
        break;
      }
    }
    return this;
  }

  extractMin() {
    let topMost = this.items[0];
    this.items[0] = this.items.pop();
    // bubble down
    let currentIndex = 0;
    let last = this.items[currentIndex];
    for (let i = 0; i < this.level; ++i) {
      let leftChildIndex = (currentIndex + 1) * 2 - 1;
      let rightChildIndex = leftChildIndex + 1;
      let leftChild = this.items[leftChildIndex];
      let rightChild = this.items[rightChildIndex];
      if (last > leftChild || last > rightChild) {
        if (!rightChild) {
          this.items.push(last);
          break;
        }
        if (leftChild < rightChild) {
          let temp = last;
          this.items[currentIndex] = this.items[leftChildIndex];
          this.items[leftChildIndex] = temp;
          currentIndex = leftChildIndex;
        } else {
          let temp = last;
          this.items[currentIndex] = this.items[rightChildIndex];
          this.items[rightChildIndex] = temp;
          currentIndex = rightChildIndex;
        }
      }
    }
    return topMost;
  }
}

let heap = new MinHeap();
heap.insert(3).insert(15).insert(21).insert(30).insert(31).insert(32).insert(40).insert(51).insert(50).insert(40);
console.log('level: ', heap.level);
heap.insert(8);
console.log('items: ', heap.items);
const min = heap.extractMin();
console.log('extract min: ', min);
console.log('items: ', heap.items);
