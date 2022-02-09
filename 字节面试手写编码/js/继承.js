// 原型链继承
Grand.prototype.lastName = "JC";
function Grand() {}
var grand = new Grand();
Father.prototype = grand;
function Father() {
  this.name = "hehe";
}
var father = new Father();
Son.prototype = father;
function Son() {}
var son = new Son();
// 构造函数继承
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
function Student(name, age, sex, grade) {
  Person.call(this, name, age, sex);
  this.grade = grade;
}
var student = new Student("dg", 40, "male", 18);
// 组合继承
Father.prototype.getfaName = function () {
  console.log(this.faName);
};
function Father(name) {
  this.faName = "father";
}
Child.prototype = new Father();
Child.prototype.constructor = Child;
function Child(args) {
  this.chName = "child";
  Father.apply(this, []);
}
var child = new Child();
