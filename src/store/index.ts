import { createStore } from 'vuex';
import { IMovie, SearchBy } from '@/interface';
import movies from '../mock/movies';

export default createStore({
  state: {
    movies: [] as Array<IMovie>,
  },
  getters: {
    movieDetails: (state) => (movieId: number) => {
      return state.movies.find((movie: IMovie) => movie.id === movieId);
    },
    filteredMoviesByTitle: (state) => (searchValue: string) => {
      const searchValueLowerCased = searchValue.toLowerCase();
      return state.movies.filter(({ title }) => {
        return title.toLowerCase().indexOf(searchValueLowerCased) != -1;
      });
    },
    filteredMoviesByGenre: (state) => (searchValue: string) => {
      const searchValueLowerCased = searchValue.toLowerCase();
      return state.movies.filter(({ genres }) => {
        return (
          genres.join(' ').toLowerCase().indexOf(searchValueLowerCased) != -1
        );
      });
    },
  },
  mutations: {
    updateProductsData(state, movies) {
      state.movies = movies;
    },
  },
  actions: {
    fetchMovies: ({ commit }) => {
      setTimeout(() => {
        commit('updateProductsData', movies);
      }, 1e3);
    },
  },
  modules: {},
});
