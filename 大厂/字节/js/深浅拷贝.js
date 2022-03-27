// 浅拷贝
let obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: [1, 2, 3],
  },
};
let obj1 = {};
//直接赋值
// let obj1 = obj
// let obj1 = {...obj}
//for
function fun1(obj) {
  for (key in obj) {
    obj1[key] = obj[key];
  }
  return obj1;
}

// Object.assign()
Object.assign(obj1, obj);
// obj.c.d = 11;

// 深拷贝
// JSON序列化和反序列化
let res1 = JSON.stringify(obj);
let res2 = JSON.parse(res1);
// obj.c.d = 11;
function fun2(obj) {
  for (key in obj) {
    if (typeof obj[key] !== "object") {
      obj1[key] = obj[key];
    } else {
      obj1[key] = fun2(obj[key]);
    }
  }
  return obj1;
}

function deepClone(oldobj) {
  if (typeof oldobj !== "object" || oldobj == null) {
    return oldobj;
  }
  let reslut;
  if (oldobj instanceof Array) {
    reslut = [];
  } else {
    reslut = {};
  }
  for (let key in oldobj) {
    if (oldobj.hasOwnProperty(key)) {
      reslut[key] = deepClone(oldobj[key]);
    }
  }
  return reslut;
}
// console.log(fun2(obj));

function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) {
    return null;
  }
  
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  if (typeof obj !== "object") {
    return obj;
  }

  if (hash.has(obj)) {
    return hash.get(obj);
  }

  const resObj = Array.isArray(obj) ? [] : {};

  hash.set(obj, resObj);
  Reflect.ownKeys(obj).forEach((key) => {
    resObj[key] = deepClone(obj[key], hash);
  });
  return resObj;
}