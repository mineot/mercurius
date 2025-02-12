import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { createPinia } from 'pinia';
import { i18n } from 'src/i18n';
import axios from 'axios';

const pinia = createPinia();

import FooterComponent from 'comps/FooterComponent.vue';
import HeaderComponent from 'comps/HeaderComponent.vue';
import LayoutComponent from 'comps/LayoutComponent.vue';
import NavComponent from 'comps/NavComponent.vue';

import BrandWidget from 'wid/BrandWidget.vue';

(window as any).axios = axios;
(window as any).axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

createInertiaApp({
  resolve: (name) => import(`../pages/${name}.vue`),
  setup({ el, App, props }) {
    const app = createApp({ render: () => h(App, props) });
    app.use(i18n);
    app.use(pinia);
    app.component('c-footer', FooterComponent);
    app.component('c-header', HeaderComponent);
    app.component('c-layout', LayoutComponent);
    app.component('c-nav', NavComponent);
    app.component('w-brand', BrandWidget);
    app.mount(el);
  },
});
