import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../../src/Home.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        component: (r) =>
          require.ensure([], () => r(require("@/views/Index")), "index"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
