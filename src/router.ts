import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import MovieDetailsPage from './pages/MovieDetailsPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    {
      path: '/search',
      component: HomePage,
      props: true,
    },
    {
      path: '/movie-details/:movieId',
      component: MovieDetailsPage,
      props: true,
    },
    {
      path: '/:catchAll(.*)',
      component: NotFoundPage,
    },
  ],
});
