import Btn from "@component/Btn.vue";
import PasswordField from "@component/fields/PasswordField.vue";
import TextField from "@component/fields/TextField.vue";

import PublicLayout from "@publicPage/components/PublicLayout.vue";
import PublicMenu from "@publicPage/components/PublicMenu.vue";
import PublicOffcanvas from "@publicPage/components/PublicOffcanvas.vue";
import PublicSidebar from "@publicPage/components/PublicSidebar.vue";
import PublicTopbar from "@publicPage/components/PublicTopbar.vue";

import LayoutAdmin from "@adminPage/components/LayoutAdmin.vue";
import LayoutAuth from "@authPage/components/LayoutAuth.vue";

import CardAuth from "@authPage/components/CardAuth.vue";

export function registerComponents(app: any) {
  app.component("btn", Btn);
  app.component("pswdfield", PasswordField);
  app.component("textfield", TextField);

  app.component("public-layout", PublicLayout);
  app.component("public-menu", PublicMenu);
  app.component("public-offcanvas", PublicOffcanvas);
  app.component("public-sidebar", PublicSidebar);
  app.component("public-topbar", PublicTopbar);

  app.component("layout-admin", LayoutAdmin);
  app.component("layout-auth", LayoutAuth);

  app.component("card-auth", CardAuth);
}
