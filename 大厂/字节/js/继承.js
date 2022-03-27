// 原型链继承
function Parent() {
  this.age = 20;
}
function Child(){
  this.name = "张三";
}
Child.prototype = new Parent();


//组合继承
function Parent() {
  this.age = 20;
}
function Child(){
  this.name = "张三";
  Parent.call(this);
}


// 寄生组合继承
function Parent() {
  this.age = 20;
}
function Child(){
  Parent.call(this);
  this.name = "张三";
}
Child.prototype = new Parent();


// extends
class Parent {
  constructor(){
    this.age = 18;
  }
}
class Child extends Parent{
  constructor(){
    super();
    this.name = "张三";
  }
}