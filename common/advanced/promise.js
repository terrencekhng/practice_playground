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
    let promise2 = new MyPromise((resolve, reject) => {
      try {
        if (typeof onFulfilled === 'function') {
          // onFulfilled(this.value);
          // resolve(this.value);
          let x = onFulfilled(this.value);
          resolvePromise(promise2, x, resolve, reject);
        } else {
          resolve(this.value);
        }
      } catch (error) {
        reject(error);
      }

      return promise2;
    });
  }

  if (this.state === REJECTED) {
    let promise2 = new MyPromise((resolve, reject) => {
      try {
        if (typeof onRejected === 'function') {
          // onRejected(this.reason);
          // resolve();
          let x = onRejected(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        } else {
          reject(this.reason);
        }
      } catch (error) {
        reject(error);
      }

      return promise2;
    });
  }

  if (this.state === PENDING) {
    let promise2 = new MyPromise((resolve, reject) => {
      this.onFulfilledCallbacks.push(() => {
        try {
          // onFulfilled(this.value);
          let x = onFulfilled(this.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      });
      this.onRejectedCallbacks.push(() => {
        try {
          // onRejected(this.reason);
          let x = onRejected(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      });
    });
    return promise2;
  }

  return this;
}

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    return reject(new TypeError('The promise and the return value are the same!'));
  }
  if (x instanceof MyPromise) {
    x.then((y) => {
      resolvePromise(promise, y, resolve, reject);
    }, reject)
  }
  else if (typeof x === 'object' || typeof x === 'function') {
    if (x === null) {
      return resolve(x);
    }
  }
}

let promise = new MyPromise((resolve) => {
  setTimeout(() => {
    console.log('hello');
    resolve('resolve');
    return 1;
  }, 3000);
});
promise.then(() => {
  console.log('then: Terence');
});
