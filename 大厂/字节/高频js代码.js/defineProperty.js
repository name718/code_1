// 简单实现响应式函数，对一个对象内的所有的key添加响应式特性？
// 要求最终的输出如下方代码所示

const render = (key, val) => {
  console.log(`set key = ${key} vale = ${val}`);
};

const defineReactive = (obj, key, val) => {
  if (typeof obj === "object") {
    for (const key in obj) {
      defineReactive(obj, key, obj[key]);
    }
  }
  Object.defineProperty(obj, key, {
    get() {
      return val;
    },
    set(newVale) {
      if (val === newVale) {
        return;
      }
      val = newVale;
      render(key, val);
    },
  });
};

const data = {
  a: 1,
  b: 2,
  c: {
    c1: {
      af: 999,
    },
    c2: 4,
  },
};

reactive(data);

data.a = 5; // set key = a; val = 5;
data.b = 7; // set key = b; val = 7;
data.c.c2 = 4;
data.c.c1.af = 121; // set key = af; val = 121;
