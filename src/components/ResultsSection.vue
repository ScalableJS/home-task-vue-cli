<template>
  <section class="net-movie-list">
    <div class="net-movie-list__no-films" v-if="!filteredMovies.length">
      No films found
    </div>
    <MovieCard v-for="movie in filteredMovies" v-bind="movie" :key="movie.id" />
  </section>
</template>
<script setup lang="ts">
import { computed, defineProps, onMounted, reactive } from 'vue';
import movies from '../mock/movies.js';
import MovieCard from './MovieCard.vue';
import { IMovie, SearchBy } from '@/interface';
import { useStore } from 'vuex';

const props = defineProps({
  searchValue: {
    type: String,
    default: '',
  },
  searchBy: {
    type: Number,
    default: 0,
  },
});

const store = useStore();

const data = reactive({
  movies: [] as Array<IMovie>,
});

const filteredMovies = computed(() => {
  const searchValue = props.searchValue ?? '';
  if (props.searchBy ?? 0 === SearchBy.Title) {
    return store.getters.filteredMoviesByTitle(searchValue);
  } else {
    return store.getters.filteredMoviesByGenre(searchValue);
  }
});

onMounted(() => {
  setTimeout(() => {
    data.movies = store.state.movies;
  }, 1e3);
});
</script>

<style lang="scss">
.net-movie-list {
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  justify-content: space-around;
  padding: 50px 20px;
  margin: 20px 0;
  background: #232323;

  .net-movie-list__no-films {
    font-size: 3rem;
  }
}
</style>
