// 深拷贝
function deepClone(obj) {
    if (!obj && typeof obj != "object") {
        return;
    }
    var newObj = toString.call(obj) === '[object Array]' ? [] : {};
    for (var key in obj) {
        if (obj[key] && typeof obj[key] === "object") {
            newObj[key] = deepClone(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    } return newObj;
}// 测试let arr = [{a: 1, b: 2}, {a: 3, b: 4}];
let newArr = deepClone(arr);
newArr.length = 1; console.log(newArr);
console.log(arr);
newArr[0].a = 123;
console.log(arr[0]);
newArr[0].a = 123; console.log(arr[0]);
// 但是这个方法会存在 引用失效 的问题
var b = {};
var a = { a1: b, a2: b };
console.log(a.a1 === a.a2);
var c = deepClone(a);
console.log(c.a1 === c.c2);

let arr = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
let newArr2 = JSON.parse(JSON.stringify(arr));
console.log(arr[0]);
newArr2[0].a = 123;
console.log(arr[0])

// 浅拷贝
const target = { a: 1, b: 1 };
const source1 = { b: 2, c: 2 }
const source2 = { c: 3 }
Object.assign(target, source1, source2);