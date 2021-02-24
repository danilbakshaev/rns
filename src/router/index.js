import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Catalog",
    component: () => import("@/views/Catalog.vue")
  },
  {
    path: "/basket",
    name: "Basket",
    component: () => import("@/views/Basket.vue")
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: () => import("@/views/Favorite.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
