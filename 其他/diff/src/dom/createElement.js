export default function createElement(vnode) {
  let domNode = document.createElement(vnode.sel);
  if (vnode.children == undefined) {
    domNode.innerText = vnode.text;
  } else if (Array.isArray(vnode.children)) {
    for (let child of vnode.children) {
      let childDom = createElement(child);
      domNode.appendChild(childDom);
    }
  }
}
