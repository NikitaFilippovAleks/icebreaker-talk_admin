import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query'

import router from './router';
import App from './App.vue';

import '@fontsource-variable/inter';
import './index.css';

createApp(App)
  .use(VueQueryPlugin)
  .use(createPinia())
  .use(router)
  .mount('#app');
