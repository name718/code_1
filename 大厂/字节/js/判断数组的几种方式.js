
//通过原型链做判断
obj.__proto__ === Array.prototype;
//通过 ES6 的 Array.isArray()做判断
Array.isArrray(obj);
//通过 instanceof 做判断
obj instanceof Array;
//通过 Array.prototype.isPrototypeOf
Array.prototype.isPrototypeOf(obj);
//通过 Object.prototype.toString.call()做判断
Object.prototype.toString.call(obj).slice(8, -1) === "Array";
