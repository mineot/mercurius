import AdminMenu from "./admin/Menu.vue";
import AuthCard from "./auth/Card.vue";
import LayoutAdmin from "./layouts/Admin.vue";
import LayoutAuth from "./layouts/Auth.vue";
import LayoutPublic from "./layouts/Public.vue";
import PublicAuxMenu from "./public/auxiliaries/Menu.vue";
import PublicAuxOffcanvas from "./public/auxiliaries/OffCanvas.vue";
import PublicAuxSidebar from "./public/auxiliaries/Sidebar.vue";
import PublicAuxTopbar from "./public/auxiliaries/Topbar.vue";
import PublicProfileLarge from "./public/profiles/Large.vue";
import PublicProfileSmall from "./public/profiles/Small.vue";
import PublicSgrSigner from "./public/signers/Signer.vue";

export function widgetsRegistration(app: any) {
  app.component("wid-admin-menu", AdminMenu);
  app.component("wid-auth-card", AuthCard);
  app.component("wid-layout-admin", LayoutAdmin);
  app.component("wid-layout-auth", LayoutAuth);
  app.component("wid-layout-public", LayoutPublic);
  app.component("wid-public-aux-menu", PublicAuxMenu);
  app.component("wid-public-aux-offcanvas", PublicAuxOffcanvas);
  app.component("wid-public-aux-sidebar", PublicAuxSidebar);
  app.component("wid-public-aux-topbar", PublicAuxTopbar);
  app.component("wid-public-profile-lg", PublicProfileLarge);
  app.component("wid-public-profile-sm", PublicProfileSmall);
  app.component("wid-public-signer-signer", PublicSgrSigner);
}
