module.exports = class Publisher {
  constructor() {
    this.observers = [];
  }

  // add observer
  add(observer) {
    this.observers.push(observer);
  }

  remove(observer) {
    this.observers.forEach((item, index) => {
      if (item === observer) {
        this.observers.splice(i, 1);
      }
    });
  }

  // 通知
  notify() {
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}
