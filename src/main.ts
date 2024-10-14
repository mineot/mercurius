import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './styles/app.scss';
import { createApp } from 'vue';
import { i18n } from '@src/core/i18n';
import { router } from '@src/core/router';

import App from '@src/App.vue';
import ProfileWidget from '@src/widgets/ProfileWidget.vue';

const app = createApp(App);
app.use(router);
app.use(i18n);
app.component('app-profile-widget', ProfileWidget);
app.mount('#app');
