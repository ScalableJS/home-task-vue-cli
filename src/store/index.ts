import { createStore } from 'vuex';
import { IMovie, SearchBy, SortBy } from '@/interface';
import movies from '../mock/movies';
import { useFetch } from '@/composition/useFetch';

export default createStore({
  strict: true,
  state: {
    movies: [] as Array<IMovie>,
    searchValue: '',
    searchBy: SearchBy.Title,
    sortBy: SortBy.ReleaseDate,
  },
  getters: {
    movieDetails: (state) => (movieId: number) => {
      return state.movies.find((movie: IMovie) => movie.id === movieId);
    },
    filteredMoviesByTitle: (state) => (searchValue: string, sortBy: number) => {
      const searchValueLowerCased = searchValue.toLowerCase();
      const movies = state.movies
        .filter(({ title }) => {
          return title.toLowerCase().indexOf(searchValueLowerCased) != -1;
        })
        .sort((a: IMovie, b: IMovie) => {
          if (sortBy === SortBy.ReleaseDate) {
            return (
              new Date(b.releaseDate).valueOf() -
              new Date(a.releaseDate).valueOf()
            );
          } else {
            return b.rating - a.rating;
          }
        });

      return movies;
    },
    filteredMoviesByGenre: (state) => (searchValue: string, sortBy: number) => {
      const searchValueLowerCased = searchValue.toLowerCase();
      const movies = state.movies
        .filter(({ genres }) => {
          return (
            genres.join(' ').toLowerCase().indexOf(searchValueLowerCased) != -1
          );
        })
        .sort((a: IMovie, b: IMovie) => {
          if (sortBy === SortBy.ReleaseDate) {
            return (
              new Date(b.releaseDate).valueOf() -
              new Date(a.releaseDate).valueOf()
            );
          } else {
            return b.rating - a.rating;
          }
        });

      return movies;
    },
  },
  mutations: {
    updateProductsData(state, movies) {
      state.movies = movies;
    },
    updateSearchData(state, searchData) {
      state.searchValue = searchData.searchValue;
      state.searchBy = searchData.searchBy;
      state.sortBy = searchData.sortBy;
    },
  },
  actions: {
    updateSearchData: ({ commit }, searchData) => {
      commit('updateSearchData', searchData);
    },
    fetchMovies: async ({ commit }) => {
      const { data } = await useFetch<any[]>(
        'https://tame-erin-pike-toga.cyclic.app/movies'
      );

      // normalize response
      const movies = data.value?.map((item) => {
        return {
          id: item.id,
          posterPath: item.posterurl,
          title: item.title,
          releaseDate: item.releaseDate,
          genres: item.genres,
          rating: item.imdbRating,
        };
      });
      commit('updateProductsData', movies);
    },
  },
  modules: {},
});
