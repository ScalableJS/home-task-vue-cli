import { createApp, Plugin } from 'vue';
import App from './App.vue';
import router from './router';
import { focus } from './plugin/focusPlugin';

import './assets/main.scss';

createApp(App)
  .use(router)
  .use(focus as Plugin)
  .mount('#app');
