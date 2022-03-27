import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {formatTime} from "./utils/time"
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.directive("title", function(el, binding){
  document.title = el.dataset.title;
})
Vue.filter('format', formatTime)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
