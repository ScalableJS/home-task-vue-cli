<template>
  <MovieDetails v-if="movieDetails" v-bind="movieDetails" />
  <ResultsSection />
</template>
<script setup lang="ts">
import { defineProps, computed } from 'vue';
import ResultsSection from '../components/ResultsSection.vue';
import MovieDetails from '../components/MovieDetails.vue';
import { useStore } from 'vuex';
import { IMovie } from '@/interface';

const props = defineProps({
  movieId: Number,
});

const store = useStore();

const movieDetails = computed(
  (): IMovie => store.getters.movieDetails(props.movieId)
);
</script>
