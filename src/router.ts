import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import MovieDetailsPage from './pages/MovieDetailsPage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    {
      path: '/movie-details/:movieId',
      component: MovieDetailsPage,
      props: true,
    },
  ],
});
