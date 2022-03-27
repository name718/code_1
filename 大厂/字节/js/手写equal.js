function isEqual(obj1, obj2){
    //其中一个为值类型或null
    if(!isObject(obj1) || !isObject(obj2)){
        return obj1 === obj2;
    }
    //判断是否两个参数是同一个变量
    if(obj1 === obj2){
        return true;
    }
    //判断keys数是否相等
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if(obj1Keys.length !== obj2Keys.length){
        return false;
    }
    //深度比较每一个key
    for(let key in obj1){
        if(!isEqual(obj1[key], obj2[key])){
            return false;
        }
    }
    return true;
}