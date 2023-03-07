<template>
  <div v-if="movie.details">
    <MovieDetails v-bind="movie.details" />
    <div class="net-header-result">
      Films by "{{ movie.details.genres[0] }}" genre
    </div>
    <ResultsSection :movies="movie.movieTheSameGenre" />
  </div>
</template>
<script setup lang="ts">
import { defineProps, computed } from 'vue';
import ResultsSection from '../components/ResultsSection.vue';
import MovieDetails from '../components/MovieDetails.vue';
import { useStore } from 'vuex';
import { SortBy } from '@/interface';

const props = defineProps({
  movieId: Number,
});

const store = useStore();

const movie = computed(() => {
  const details = store.getters.movieDetails(props.movieId);
  let movieTheSameGenre = [];
  if (details) {
    movieTheSameGenre = store.getters.filteredMoviesByGenre(
      details.genres[0],
      SortBy.ReleaseDate
    );
  }

  return {
    details,
    movieTheSameGenre,
  };
});
</script>
<style scoped lang="scss">
.net-header-result {
  margin-top: 20px;
  margin-right: 40px;
  display: flex;
  align-items: center;
  padding: 0 40px;
}
</style>
