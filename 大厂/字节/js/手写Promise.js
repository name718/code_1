class MyPromise {
  static PENDING = "待定";
  static FULFILLE = "成功";
  static REJECTED = "失败";
  constructor(func) {
    this.status = MyPromise.PENDING;
    this.result = null;
    this.resloveCallbacks = [];
    this.rejectCallbacks = [];
    try {
      func(this.reslove.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  reslove(result) {
    setTimeout(() => {
      if (this.status === MyPromise.PENDING) {
        this.status = MyPromise.FULFILLE;
        this.result = result;
        this.resloveCallbacks.forEach((callback) => {
          callback(result);
        });
      }
    });
  }
  reject(result) {
    setTimeout(() => {
      if (this.status === MyPromise.PENDING) {
        this.status = MyPromise.REJECTED;
        this.result = result;
        this.rejectCallbacks.forEach((callback) => {
          callback(result);
        });
      }
    });
  }
  then(onFULFILLED, onREJECTED) {
    return new MyPromise((resolve, reject) => {
      onFULFILLED = typeof onFULFILLE === "function" ? onFULFILLED : () => {};
      onREJECTED = typeof onFULFILLE === "function" ? onREJECTED : () => {};
      if (this.status === MyPromise.PENDING) {
        this.rejectCallbacks.push(onREJECTED);
        this.resloveCallbacks.push(onFULFILLED);
      }
      if (this.status === MyPromise.FULFILLE) {
        setTimeout(() => {
          onFULFILLED(this.result);
        });
      }
      if (this.status === MyPromise.REJECTED) {
        setTimeout(() => {
          onREJECTED(this.result);
        });
      }
    });
  }
}

new MyPromise((resolve, reject) => {
  resolve("下次一定");
  reject("这次一定");
});
