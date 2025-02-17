import { appComponents } from '@component/components';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { createPinia } from 'pinia';
import { i18n } from '@script/i18n';
import axios from 'axios';

const pinia = createPinia();
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
    appComponents(app);
    app.mount(el);
  },
});
