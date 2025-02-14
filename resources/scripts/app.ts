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

import ProfileWidget from '@widget/ProfileWidget.vue';

(window as any).axios = axios;
(window as any).axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

createInertiaApp({
  resolve: async (name) => {
    try {
      return Promise.any([
        import(`@page/${name}.vue`),
        import(`@page/auth/${name}.vue`),
        import(`@page/admin/${name}.vue`),
      ]);
    } catch (error) {
      console.error(error);
      throw `Page not found: ${name}`;
    }
  },
  setup({ el, App, props }) {
    const app = createApp({ render: () => h(App, props) });
    app.use(i18n);
    app.use(pinia);
    app.component('app-layout-footer', LayoutFooterComponent);
    app.component('app-layout-header', LayoutHeaderComponent);
    app.component('app-layout-main', LayoutMainComponent);
    app.component('app-layout-nav', LayoutNavComponent);
    app.component('app-layout', LayoutComponent);
    app.component('wapp-profile', ProfileWidget);
    app.mount(el);
  },
});
