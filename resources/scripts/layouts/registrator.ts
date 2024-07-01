import LayoutAdmin from "@layout/LayoutAdmin.vue";
import LayoutAuth from "@layout/LayoutAuth.vue";
import LayoutPublic from "@layout/LayoutPublic.vue";

export function layoutRegistrator(app: any) {
  app.component("layout-admin", LayoutAdmin);
  app.component("layout-auth", LayoutAuth);
  app.component("layout-public", LayoutPublic);
}
