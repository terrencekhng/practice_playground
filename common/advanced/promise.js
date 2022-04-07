let PENDING = 'pending';
let FULFILLED = 'fulfilled';
let REJECTED = 'rejected';

function MyPromise(fn) {
  this.state = PENDING;
  this.value = null;
  this.reason = null;
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];
  try {
    fn(resolve, reject);
  } catch (error) {
    reject(error);
  }

  const that = this;
  function resolve(value) {
    if (that.state === PENDING) {
      that.value = value;
      that.state = FULFILLED;
      that.onFulfilledCallbacks.forEach(callback => {
        callback(this.value);
      })
    }
  }

  function reject(reason) {
    if (that.state === PENDING) {
      that.state = REJECTED;
      that.reason = reason;
      that.onRejectedCallbacks.forEach(callback => {
        callback(this.reason);
      })
    }
  }
}

MyPromise.prototype.then = function(onFulfilled = null, onRejected = null) {
  if (this.state === FULFILLED) {
    if (typeof onFulfilled === 'function') {
      onFulfilled(this.value);
    } else {
      return this.value;
    }
  }

  if (this.state === REJECTED) {
    if (typeof onRejected === 'function') {
      onRejected(this.reason);
    } else {
      throw this.reason;
    }
  }

  if (this.state === PENDING) {
    this.onFulfilledCallbacks.push(onFulfilled);
    this.onRejectedCallbacks.push(onRejected);
  }

  return this;
}


let promise = new MyPromise((resolve) => {
  setTimeout(() => {
    console.log('hello');
    resolve('resolve');
  }, 3000);
});
promise.then(() => {
  console.log('then: Terence');
});
