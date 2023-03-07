<template>
  <section class="net-movie-list">
    <div class="net-movie-list__no-films" v-if="!movies.length">
      No films found
    </div>
    <MovieCard v-for="movie in movies" v-bind="movie" :key="movie.id" />
  </section>
</template>
<script setup lang="ts">
import MovieCard from './MovieCard.vue';
import { IMovie } from '@/interface';
import { defineProps, PropType } from 'vue';

const props = defineProps({
  movies: {
    type: Array as PropType<IMovie[]>,
    required: true,
    default: () => [],
  },
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
