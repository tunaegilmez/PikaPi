import axios from "axios";

let offset = 0;
let limit = 30;

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
  ADD_POKES: (state, newPokes) => {
    state.pokemons = [...state.pokemons, ...newPokes];
  },
};
const actions = {
  fetchPokemons: ({ commit }) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then(res => {
        commit("SET_POKES", res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  },
  loadMore: ({ commit }) => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?offset=${(offset +=
          limit)}&limit=${limit}`
      )
      .then(res => {
        const newPokes = res.data.results;
        commit("ADD_POKES", newPokes);
      })
      .catch(err => {
        console.log(err);
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
