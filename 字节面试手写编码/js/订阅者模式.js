function Event() {
    // 存储不同的事件类型对应不同的处理函数，保证后续emmit可以执行
    this.cache = {};
}
Event.prototype.on = function(type, handle) {
    if(!this.cache[type]) {
        this.cache[type] = [handle];
    }else {
        this.cache[type].push(handle);
    }
}
Event.prototype.emmit = function() {
    // 没有保证参数是多少个 就用arguments
    var type = arguments[0];
    var arg = [].slice.call(arguments, 1);
    for(var i = 0; i < this.cache[type].length; i++) {
        this.cache[type][i].apply(this, arg);
    }
}
Event.prototype.empty = function(type) {
    this.cache[type] = [];
}
Event.prototype.remove = function(type, handle) {
    this.cache[type] = this.cache[type].filter(function(ele) {
        return ele != handle;
    }) 
}
Event.prototype.once = function(type, handle) {
    if(!this.cache[type]) {
        this.cache[type] = [];
    }
    // 做标记
    handle.tag = 'true';
    this.cache[type].push(handle);
}


// 测试
function deal1(time) {
    console.log('overtime1:' + time);
}
function deal2(time) {
    console.log('overtime2:' + time);
}
var oE = new Event();
oE.on('over', deal1);
oE.on('over', deal2);
oE.emmit('over', '2018-9-25');
oE.remove('over', deal2);
oE.emmit('over', 'seconde-1-1');