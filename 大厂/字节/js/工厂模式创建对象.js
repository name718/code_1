function createObject(name,age) {
    //创建对象
    var obj = new Object();
    //添加属性
    obj.name=name;
    obj.age=age;
    //添加方法
    obj.sayHi=function () {
      console.log("您好啊，小明，我是:"+obj.name+",我今年:"+obj.age);//或 this.name,this.age都是可以的
    };
    return obj;
}
//创建人的对象
var per1=createObject("小红",20);
per1.sayHi();
//创建一个人的对象
var per2=createObject("小黑",22);
per2.sayHi();