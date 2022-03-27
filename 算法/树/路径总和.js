/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function (root, targetSum) {
    if (root == null) return false;
    // queue队列存储需扩散往下走到叶子节点的  节点
    let queue = [root];
    // queueVal队列存储queue对应节点从根节点一路走过来的值的和
    let queueVal = [root.val];
    while (queue.length) {
      let size = queue.length;
      while (size--) {
        let cur = queue.shift();
        let curVal = queueVal.shift();
        if (cur.left == null && cur.right == null && curVal == targetSum)
          return true;
        if (cur.left) {
          queue.push(cur.left);
          queueVal.push(cur.left.val + curVal);
        }
        if (cur.right) {
          queue.push(cur.right);
          queueVal.push(cur.right.val + curVal);
        }
      }
    }
    return false;
  };
