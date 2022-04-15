class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.working = [];
    this.currentTaskCount = 0;
  }

  add(promise) {
    return new Promise((resolve, reject) => {
      promise.resolve = resolve;
      promise.reject = reject;
      this.working.push(promise);
      this.run();
    })
  }

  run() {
    if (this.currentTaskCount < this.limit && this.working.length) {
      this.currentTaskCount += 1;
      const promise = this.working.shift();
      promise().then((res) => {
        promise.resolve(res);
      }).catch((res) => {
        promise.reject(res);
      }).finally(() => {
        this.currentTaskCount -= 1;
        this.run();
      });
    }
  }
}

const scheduler = new Scheduler(3);

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time);
});

function addTask(time, text) {
  scheduler.add(() => timeout(time)).then(() => {
    console.log(text);
  });
};

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
