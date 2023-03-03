import { createStore } from 'vuex';
import { IMovie, SearchBy } from '@/interface';
import movies from '../mock/movies';

export default createStore({
  state: {
    movies: movies,
  },
  getters: {
    movieDetails: (state) => (movieId: number) => {
      return state.movies.find((movie: IMovie) => {
        return movie.id === movieId;
      });
    },
    filteredMoviesByTitle: (state) => (searchValue: string) => {
      const searchValueLowerCased = searchValue.toLowerCase();
      return state.movies.filter((movie: IMovie) => {
        return movie.title.toLowerCase().indexOf(searchValueLowerCased) != -1;
      });
    },
    filteredMoviesByGenre: (state) => (searchValue: string) => {
      const searchValueLowerCased = searchValue.toLowerCase();
      return state.movies.filter((movie: IMovie) => {
        return (
          movie.genres.join(' ').toLowerCase().indexOf(searchValueLowerCased) !=
          -1
        );
      });
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
