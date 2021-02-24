import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Basket from "@/views/Basket.vue";
import Favorite from "@/views/Favorite.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/basket",
    name: "Basket",
    component: Basket
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: Favorite
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
