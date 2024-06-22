import Btn from "@component/Btn.vue";
import PasswordField from "@component/fields/PasswordField.vue";
import TextField from "@component/fields/TextField.vue";

import LayoutAdmin from "@adminPage/components/LayoutAdmin.vue";
import LayoutAuth from "@authPage/components/LayoutAuth.vue";
import LayoutPublic from "@publicPage/components/LayoutPublic.vue";

import CardAuth from "@authPage/components/CardAuth.vue";

export function registerComponents(app: any) {
  app.component("btn", Btn);
  app.component("pswdfield", PasswordField);
  app.component("textfield", TextField);

  app.component("layout-admin", LayoutAdmin);
  app.component("layout-auth", LayoutAuth);
  app.component("layout-public", LayoutPublic);

  app.component("card-auth", CardAuth);
}
