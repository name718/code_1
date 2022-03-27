/**
 * @param {number[]} preOrder
 * @param {number[]} inOrder
 * @return {TreeNode}
 */
 var buildTree = function (preOrder, inOrder) {
    const build = (preStart, preEnd, inStart, inEnd) => {
      if (preStart > preEnd) return null;
      // root 节点对应的值就是前序遍历数组的第一个元素
      let rootVal = preOrder[preStart];
      // rootVal 在中序遍历数组中的索引
      let index = inOrder.indexOf(rootVal);
      // 左子树个数
      let leftSize = index - inStart;
      // 先构造出当前根节点
      let root = new TreeNode(rootVal);
      // 递归构造左右子树
      root.left = build(preStart + 1, preStart + leftSize, inStart, index - 1);
      root.right = build(preStart + leftSize + 1, preEnd, index + 1, inEnd);
      return root;
    };
    return build(0, preOrder.length - 1, 0, inOrder.length - 1);
  };
  