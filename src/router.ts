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
      props: (route) => {
        return {
          ...route.params,
          searchValue: route.query.sv,
          searchBy: Number(route.query.sb ?? 0),
        };
      },
    },
    {
      path: '/movie-details/:movieId',
      component: MovieDetailsPage,
      props: (route) => {
        return {
          ...route.params,
          ...{ movieId: Number(route.params.movieId) },
        };
      },
    },
    {
      path: '/:catchAll(.*)',
      component: NotFoundPage,
    },
  ],
});
