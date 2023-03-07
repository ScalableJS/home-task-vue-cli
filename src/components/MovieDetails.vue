<template>
  <section class="net-movie-details">
    <div class="net-movie-details__img-wrapper">
      <img :src="props.posterPath" alt="Poster" />
    </div>
    <div class="net-movie-details__info">
      <h2>
        {{ props.title }}
        <span class="net-movie-details__rating">{{ props.rating }}</span>
      </h2>
      <div>{{ genreList }}</div>
      <div>
        <span>{{ releaseDateYear }}</span
        >year<span>{{ props.runtime }}</span
        >min
      </div>
      <p>{{ props.description }}</p>
    </div>
  </section>
</template>
<script setup lang="ts">
// Vue + typescript does not support import for defineProps
import { computed, defineProps, withDefaults } from 'vue';

interface IMovie {
  id: number;
  posterPath: string;
  title: string;
  releaseDate?: string;
  genres?: Array<string>;
  description: string;
  runtime: number;
  rating: number;
  tagline: string;
}

const props = withDefaults(defineProps<IMovie>(), {
  releaseDate: '',
  genres: () => [],
});

const releaseDateYear = computed(() => {
  return props.releaseDate.split('-')[0];
});
const genreList = computed(() => {
  return props.genres.join(', ');
});
</script>
<style scoped lang="scss">
.net-movie-details {
  display: flex;
  gap: 20px;
  background: #232323;
  padding: 40px;
}

.net-movie-details__img-wrapper {
  max-width: 350px;
  width: 30%;

  img {
    width: 100%;
  }
}

.net-movie-details__info {
  width: 60%;
  min-width: 400px;
}
</style>
