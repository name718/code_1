// 收集依赖/收集订阅
class Dep {
  constructor() {
    // 这个subs存放订阅者信息
    this.subs = [];
  }

  // 添加订阅者信息
  addSub(watcher) {
    this.subs.push(watcher);
  }

  //发布订阅方法
  notify() {
      this.subs.forEach((watcher) => {
          watcher.update();
      })
  }
};

// 订阅者类
class Watcher {
    constructor(cb) {
        this.cb = cb;
    }
    //触发回调方法
    update() {
        this.cb();
    }
}


const w1 = new Watcher( () => {
    console.log("我是第一个订阅者");
})
const w2 = new Watcher( () => {
    console.log("我是第二个订阅者");
})

const dep = new Dep();

dep.addSub(w1);
dep.addSub(w2);


// 只要我们为vue中的data重新赋值，会被vue监听到
// 然后vue把数据的变换，通知到每个订阅者 ！！！！！！
// 接下来，订阅者更新数据
dep.notify();