var leveOrder = function (root) {
  if (!root) {
    return [];
  }

  const queue = [root];
  const res = [];

  while (queue.length) {
    const temp = [];
    for (let i = queue.length; i > 0; i--) {
      const node = queue.shift();
      temp.push(node.val);

      if (node.left) {
        res.push(node.left);
      }
      if (node.right) {
        res.push(node.right);
      }
    }

    res.push(temp);
  }

  return res;
};
