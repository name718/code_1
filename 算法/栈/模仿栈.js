let stack = function(){
    let arr = [];
    return {
        push:function(data){
            arr.push(data);
        },
        pop:function(){
            return arr.pop();
        },
        size: function(){
            return arr.length;
        }
    }
}