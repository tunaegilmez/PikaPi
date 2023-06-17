import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

const state = {
  pokemons: [],
};
const getters = {
  getPokes: state => state.pokemons,
};
const mutations = {
  SET_POKES: (state, pokemons) => {
    state.pokemons = pokemons;
  },
};
const actions = {
  setAllPokes: ({ commit }) => {
    axios.get(BASE_URL).then(res => {
      console.log(res);
      commit("SET_POKES", res.data.results);
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
