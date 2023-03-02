<template>
  <MovieDetails v-bind="movieDetails" />
  <ResultsSection />
</template>
<script setup lang="ts">
import { defineProps, computed } from 'vue';
import ResultsSection from '../components/ResultsSection.vue';
import MovieDetails from '../components/MovieDetails.vue';
import movies from '../mock/movies.js';

const props = defineProps({
  movieId: Number,
});

const movieDetails = computed(() => {
  return movies.find((movie) => {
    return movie.id === Number(props.movieId);
  });
});
</script>
