const obj = {
    name:"张三",
    age:18
}

Object.defineProperty(obj, 'name', {
    get() {
        console.log("有人取数据了");
        return "张三";
    },
    set(newVale) {
        console.log(`有人赋值了${newVale}`);
    }
})
obj.name = "ss";
console.log(obj.name);
