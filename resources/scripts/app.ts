import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { createPinia } from 'pinia';
import { i18n } from '@script/i18n';
import axios from 'axios';

const pinia = createPinia();

import LayoutComponent from '@component/LayoutComponent.vue';
import LayoutFooterComponent from '@component/LayoutFooterComponent.vue';
import LayoutHeaderComponent from '@component/LayoutHeaderComponent.vue';
import LayoutMainComponent from '@component/LayoutMainComponent.vue';
import LayoutNavComponent from '@component/LayoutNavComponent.vue';

import BrandWidget from '@widget/BrandWidget.vue';

(window as any).axios = axios;
(window as any).axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

createInertiaApp({
  resolve: (name) => import(`../pages/${name}.vue`),
  setup({ el, App, props }) {
    const app = createApp({ render: () => h(App, props) });
    app.use(i18n);
    app.use(pinia);
    app.component('app-layout-footer', LayoutFooterComponent);
    app.component('app-layout-header', LayoutHeaderComponent);
    app.component('app-layout-main', LayoutMainComponent);
    app.component('app-layout-nav', LayoutNavComponent);
    app.component('app-layout', LayoutComponent);
    app.component('wapp-brand', BrandWidget);
    app.mount(el);
  },
});
