import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import axios from "axios";

(window as any).axios = axios;
(window as any).axios.defaults.headers.common["X-Requested-With"] =
    "XMLHttpRequest";

createInertiaApp({
    resolve: (name) => import(`../pages/${name}.vue`),
    setup({ el, App, props }) {
        const app = createApp({ render: () => h(App, props) });
        app.mount(el);
    },
});
