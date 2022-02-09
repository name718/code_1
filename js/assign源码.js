let user = {
    name: "John",
    age: 30
  };
  let clone = {}; // 新的空对象
  // 复制所有的属性值
  for (let key in user) {
    clone[key] = user[key];
  }
  // 现在的复制是独立的了
  clone.name = "Pete"; // 改变它的值
  alert( user.name ); // 原对象属性值不变