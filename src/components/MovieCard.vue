<template>
  <section class="net-movie-cart">
    <div class="net-movie-cart__img-wrapper">
      <img :src="props.posterPath" alt="poster" />
    </div>
    <h3>{{ props.title }}</h3>
    <time datatype="{{props.releaseDate}}">{{ releaseDateYear }}</time>
    <div>
      {{ genreList }}
    </div>
    <router-link
      class="net-movie-cart__details"
      :to="pathToMovieDetails"
    ></router-link>
  </section>
</template>
<script setup lang="ts">
import { computed, defineProps } from 'vue';

// Vue + typescript does not support import for defineProps
interface IMovie {
  id: number;
  posterPath: string;
  title: string;
  releaseDate: string;
  genres: Array<string>;
}

const props = defineProps<IMovie>();

const releaseDateYear = computed(() => {
  return props.releaseDate.split('-')[0];
});
const genreList = computed(() => {
  return props.genres.join(', ');
});
const pathToMovieDetails = computed(() => {
  return `/movie-details/${props.id}`;
});
</script>
<style scoped lang="scss">
.net-movie-cart {
  width: 300px;
  padding: 5px 20px;
  position: relative;

  .net-movie-cart__details {
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .net-movie-cart__img-wrapper {
    height: 455px;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
}
</style>
