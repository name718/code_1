import vnode from "./vnode";
import createElement from "./createElement";
import patchVnode from "./patchVnode";
export default function (oldVnode, newVnode) {
  if (oldVnode.sel === undefined) {
    vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode);
  }
  if (oldVnode.sel === newVnode.sel) {
    patchVnode(oldVnode, newVnode);
  } else {
    let newVnodeElm = createElement(newVnode);
    let oldVnodeElm = oldVnode.elm;
    if (newVnodeElm) {
      oldVnodeElm.parentNode.insertBefore(newVnodeElm, oldVnodeElm);
    }
    oldVnodeElm.parentNode.removeChild(oldVnodeElm);
  }
}
