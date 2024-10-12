import './styles/app.scss';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from '@src/core/router';

import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
