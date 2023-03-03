import { createStore } from 'vuex';
import movies from '../mock/movies';

export default createStore({
  state: {
    movies: movies,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
