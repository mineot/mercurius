import { axiosInstance } from "@config/axios";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { i18nInstance } from "@config/i18n";
import { routerInstance } from "@config/router";

import Btn from "@/vue/widgets/Btn.vue";
import CardAuth from "@component/auth/CardAuth.vue";
import LayoutAdmin from "@component/admin/LayoutAdmin.vue";
import LayoutAuth from "@component/auth/LayoutAuth.vue";
import LayoutPublic from "@component/public/LayoutPublic.vue";
import PswdField from "@widget/fields/PasswordField.vue";
import TextField from "@widget/fields/TextField.vue";

const app = createApp({});
const pinia = createPinia();

app.component("btn", Btn);
app.component("card-auth", CardAuth);
app.component("layout-admin", LayoutAdmin);
app.component("layout-auth", LayoutAuth);
app.component("layout-public", LayoutPublic);
app.component("pswdfield", PswdField);
app.component("textfield", TextField);
app.use(axiosInstance);
app.use(i18nInstance);
app.use(pinia);
app.use(routerInstance);
app.mount("#app");
