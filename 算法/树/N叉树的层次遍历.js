var levelOrder = function(root) {
    if(!root) return [];
    let res = [];
    let queue = [];
    queue.push(root);
    while(queue.length){
        let size = queue.length;
        let level = [];
        while(size--){
            let node = queue.shift();
            level.push(node.val);
            for(let child of node.children){
                if(child){
                    queue.push(child);
                }
            }
            
        }
        res.push(level);
    }
    return res;
};