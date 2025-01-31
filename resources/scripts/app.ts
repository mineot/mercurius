import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { i18n } from 'src/i18n';
import axios from 'axios';

import HeaderComponent from 'comps/HeaderComponent.vue';

import TitleWidget from 'wid/TitleWidget.vue';

(window as any).axios = axios;
(window as any).axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

createInertiaApp({
  resolve: (name) => import(`../pages/${name}.vue`),
  setup({ el, App, props }) {
    const app = createApp({ render: () => h(App, props) });
    app.use(i18n);
    app.component('c-header', HeaderComponent);
    app.component('w-title', TitleWidget);
    app.mount(el);
  },
});
