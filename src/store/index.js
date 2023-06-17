import Vue from "vue";
import Vuex from "vuex";
import poke from "./modules/poke";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    poke,
  },
});
