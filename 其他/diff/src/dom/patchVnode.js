import createElement from "./createElement ";
export default function (oldVnode, newVnode) {
  if (newVnode.children == undefined) {
    if (newVnode.text != oldVnode.text) {
      oldVnode.elm.innerText = newVnode.text;
    }
  } else {
    if (oldVnode.children != undefined && oldVnode.children.length > 0) {
    } else {
        oldVnode.elm.innerHtml = ''; 
      for (let child of newVnode.children) {
        let childDom = createElement(child);
        oldVnode.children.appendChild(childDom);
      }
    }
  }
}
