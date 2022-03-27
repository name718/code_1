function vist(p) {
  console.log(p.data);
}
// 中
var inorderTraversal = function(root) {
  if (!root) return [];
  const stack = [];
  let cur = root;
  const res = [];
  while (stack.length || cur) {
    // 左节点都先压入栈
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    const node = stack.pop();
    res.push(node.val);
    if (node.right != null) {
      cur = node.right;
    }
  }
  return res;
};

// 前
function preOrder(T) {
  let p = T;
  let stack = [];
  while (p || stack.length) {
    if (p) {
      vist(p);
      stack.push(p.data);
      p = p.left;
    } else {
      p = stack.pop();
      p = p.right;
    }
  }
}

// 后
function postOrder(T) {
    let p = T;
    let stack = [];
    let r = null;
    while (p || stack.length) {
      if (p) {
        stack.push(p.data);
        p = p.left;
      } else {
        let node = stack.slice(-1);
        if(!node.right && !node.right == r){
            p = p.right;
        }else{
            p = stack.pop();
            vist(p);
            r = p;
            p = null;
        }
      }
    }
  }