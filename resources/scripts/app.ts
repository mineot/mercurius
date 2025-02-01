import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { i18n } from 'src/i18n';
import axios from 'axios';

import FooterComponent from 'comps/FooterComponent.vue';
import HeaderComponent from 'comps/HeaderComponent.vue';
import LayoutComponent from 'comps/LayoutComponent.vue';
import NavComponent from 'comps/NavComponent.vue';

import TitleWidget from 'wid/TitleWidget.vue';

(window as any).axios = axios;
(window as any).axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

createInertiaApp({
  resolve: (name) => import(`../pages/${name}.vue`),
  setup({ el, App, props }) {
    const app = createApp({ render: () => h(App, props) });
    app.use(i18n);
    app.component('c-footer', FooterComponent);
    app.component('c-header', HeaderComponent);
    app.component('c-layout', LayoutComponent);
    app.component('c-nav', NavComponent);
    app.component('w-title', TitleWidget);
    app.mount(el);
  },
});
