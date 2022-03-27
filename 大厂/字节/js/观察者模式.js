// 发布者
let shopObj = {};
shopObj.list = [];

// 订阅
shopObj.listen = function (key, fn) {
  if (!this.list[key]) {
    this.list[key] = [];
  }
  this.list[key].push(fn);
  shopObj.list.push(fn);
};

//发布消息
shopObj.public = function () {
  let fns = this.list[key];
  for (let i = 0, fn; (fn = fns[i++]); ) {
    fn.apply(this, arguments);
  }
};

// 添加订阅
shopObj.listen(function (brand, model) {
  console.log(brand, model);
});

// 商家发布消息
shopObj.public();
