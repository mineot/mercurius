import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { createPinia } from 'pinia';
import { i18n } from '@script/i18n';
import axios from 'axios';

const pinia = createPinia();

import FooterComponent from '@component/FooterComponent.vue';
import HeaderComponent from '@component/HeaderComponent.vue';
import LayoutComponent from '@component/LayoutComponent.vue';
import NavComponent from '@component/NavComponent.vue';

import BrandWidget from '@widget/BrandWidget.vue';

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
