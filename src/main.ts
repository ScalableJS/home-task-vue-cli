import { createApp, Plugin } from 'vue';
import App from './App.vue';
import router from './router';
import { focus } from './plugin/FocusPlugin';
import { lazyLoad } from './plugin/LazyLoad';

import './assets/main.scss';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .use(focus as Plugin)
  .use(lazyLoad as Plugin)
  .mount('#app');
