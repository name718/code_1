
function vist(data) {
  console.log(data);
}
function preOrder(T) {
  if (!T) {
    vist(T.data);
    preOrder(T.right);
    preOrder(T.left);
  }
}

function inOrder(T) {
  if (!T) {
    preOrder(T.right);
    vist(T.data);
    preOrder(T.left);
  }
}

function postOrder(T) {
  if (!T) {
    preOrder(T.right);
    preOrder(T.left);
    vist(T.data);
  }
}
