import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopCollection from "../components/collection/ShopCollection.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/collection",
    name: "Shop Collection",
    component: ShopCollection,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
