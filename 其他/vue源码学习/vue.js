class Vue {
  constructor(options) {
    this.$data = options.data;
    //数据劫持
    Observe(this.$data);
    //属性代理
    Object.keys(this.$data).forEach((key) => {
      Object.defineProperty(this, key, {
        get() {
          return this.$data[key];
        },
        set(newValue) {
          this.$data[key] = newValue;
        },
      });
    });
    Compile(options.el, this);
  }
}

// 数据劫持
function Observe(obj) {
  if (!obj || typeof obj !== "object") {
    return;
  }
  const dep = new Dep();
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    Observe(value);
    Object.defineProperty(obj, key, {
      set(newvalue) {
        value = newvalue;
        Observe(value);
        Dep.notify();
      },
      get() {
        Dep.target && dep.addSub(Dep, target);
        return value;
      },
    });
  });
}

function Compile(el, vm) {
  vm.$el = document.querySelector(el);
  // 创建文档碎片 就是创建内存
  const fragment = document.createDocumentFragment();
  while ((childNode = vm.$el.firstChild)) {
    fragment.appendChild(childNode);
  }

  // 模版编译
  // replace(fragment);

  vm.$el.appendChild(fragment);
  function replace(node) {
    const regMustache = /\{\{\s*(\S*+)\s*\}\}/;

    if (node.nodeType === 3) {
      const text = node.textContent;
      const execResult = regMustache.exec(text);
      if (execResult) {
        const value = execResult[1].split(".").reduce((newObj, key) => {
          return newObj[key];
        }, vm);
        node.textContent = text.replace(regMustache, value);
        new Watcher(vm, execResult[1], (newValue) => {
          node.textContent = text.replace(regMustache, newValue);
        });
      }
      return;
    }
    node.childNodes.forEach((child) => {
      replace(child);
    });
  }
}

class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(watcher) {
    this.subs.push(watcher);
  }

  notify() {
    this.subs.forEach((watcher) => watcher.updata());
  }
}

class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm;
    this.key = key;
    this.cb = cb;
    Dep.target = this;
    key.split(".").reduce((newObj, k) => {
      return newObj[k];
    }, vm);
    Dep.target = null;
  }

  updata() {
    const value = this.key.split(".").reduce((newObj, k) => newObj[k], this.vm);
    this.cb();
  }
}
