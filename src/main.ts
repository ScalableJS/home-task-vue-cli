import { createApp, Plugin } from 'vue';
import App from './App.vue';
import { focus } from './plugin/focusPlugin';

import './assets/main.scss';

createApp(App)
  .use(focus as Plugin)
  .mount('#app');
