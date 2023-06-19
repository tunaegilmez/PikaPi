import Vue from "vue";
import VueRouter from "vue-router";

import ListPokeCard from "../components/ListPokeCard.vue";
import DetailPoke from "../components/DetailPoke.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ListPokes",
    component: ListPokeCard,
  },
  {
    path: "/detail/:id",
    name: "DetailPokes",
    component: DetailPoke,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
