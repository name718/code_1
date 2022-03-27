import h from './dom/h.js'
import patch from './dom/patch.js'
// let vnode2 = h('ul', {}, [
//     h('li', {}, 'a'),
//     h('li', {}, 'b'),
//     h('li', {}, 'c'),
//     h('li', {}, 'd'),
//     h('li', {}, 'e'),
// ])
let container = document.getElementById('container'); 
let vnode1 = h('div', {}, '你好吖');
patch(container, vnode1);
