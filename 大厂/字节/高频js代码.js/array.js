// vue对数组的类型是怎么处理的，简单实现监听
const render = (action, ...args) => {
  console.log(`Action = ${action}, args = ${args.join(",")};`);
};

const arrPrototype = Array.prototype;
const newArrProtoType = Object.create(arrPrototype);

const arrAction = [
  "push",
  "pop",
  "shift",
  "unshif",
  "sort",
  "splice",
  "reverse",
];
arrAction.forEach((methodName) => {
  newArrProtoType[methodName] = function () {
    arrPrototype[methodName].call(this, ...arguments);
    render(methodName, ...arguments);
  };
});

const reactive = (obj) => {
  if (Array.isArray(obj)) {
    obj.__proto__ = newArrProtoType;
  }
};

const data = [1, 2, 3, 4];
reactive(data);
data.push(5); // Action = push, args = 5;
data.splice(0, 2); // Action = splice, args = 0,2;
