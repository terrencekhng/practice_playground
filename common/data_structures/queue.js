class Queue {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  static get MAX_QUEUE_SIZE() {
    return 1024;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return undefined;
  }

  enqueue(val) {
    if (!this.isFull()) {
      this.items.push(val);
      this.size += 1;
    }
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('underflow');
    }
    this.size -= 1;
    return this.items.shift();
  }

  isFull() {
    return this.size === Queue.MAX_QUEUE_SIZE;
  }

  isEmpty() {
    return !this.size;
  }

  printQueue() {
    if (!this.isEmpty()) {
      for (let i = 0; i < this.size; ++i) {
        console.log(this.items[i]);
      }
    }
  }
}

let queue1 = new Queue();
queue1.enqueue(1).enqueue(2).enqueue(3).enqueue(4);
queue1.printQueue();
let el = queue1.dequeue();
console.log('dequeue: ', el);
let el2 = queue1.dequeue();
console.log('dequeue: ', el2);
queue1.printQueue();

class QueueNode {
  constructor() {

  }
}

class NodeQueue {

}

/**
 * p3.6
 * An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first out"basis. People must adopt either the"oldest"(based on arrival time) o fall animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built-in Linkedlist data structure.
 */
class AnimalQueue {
  constructor() {
    this.catQueue = new Queue();
    this.dogQueue = new Queue();
  }

  enqueue(animal) {
    if (animal === 'cat') {
      this.catQueue.enqueue({
        type: animal,
        enterTime: Date.now(),
      });
    } else if (animal === 'dog') {
      this.dogQueue.enqueue({
        type: animal,
        enterTime: Date.now(),
      });
    }
    return this;
  }

  dequeueAny() {
    if (this.catQueue.isEmpty()) {
      return this.dequeueDog();
    }
    if (this.dogQueue.isEmpty()) {
      return this.dequeueCat();
    }
    if (this.dogQueue.peek().enterTime < this.catQueue.peek().enterTime) {
      return this.dequeueDog();
    } else {
      return this.dequeueCat();
    }
  }

  dequeueDog() {
    return this.dogQueue.dequeue();
  }

  dequeueCat() {
    return this.catQueue.dequeue();
  }

  printAnimals() {
    console.log('cats: ');
    this.catQueue.printQueue();
    console.log('dogs: ');
    this.dogQueue.printQueue();
  }
}

console.log('animal shelter');
let animalQueue = new AnimalQueue();
const types = ['cat', 'dog'];
let counter = 0;
let enqueuePromise = new Promise((resolve) => {
  let enqueueInterval = setInterval(() => {
    if (counter === 10) {
      clearInterval(enqueueInterval);
      resolve();
    }
    let index = Math.floor(Math.random() * 2);
    animalQueue.enqueue(types[index]);
    counter += 1;
  }, 1000);
});

enqueuePromise.then(() => {
  animalQueue.printAnimals();
  console.log('dequeue dog: ', animalQueue.dequeueDog());
  console.log('dequeue any: ', animalQueue.dequeueAny());
});
