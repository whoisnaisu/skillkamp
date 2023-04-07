import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainView from "../views/MainView.vue";
import ShopCollection from "../components/homePage/ShopCollection.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/home/collection",
    name: "Shop Collection",
    component: ShopCollection,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
