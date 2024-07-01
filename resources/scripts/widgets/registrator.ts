import AdminMenu from "@widget/admin/Menu.vue";
import AuthCard from "@widget/auth/Card.vue";
import PublicMenu from "@widget/public/Menu.vue";
import PublicOffcanvas from "@widget/public/OffCanvas.vue";
import PublicProfileLarge from "@widget/public/ProfileLarge.vue";
import PublicProfileSmall from "@widget/public/ProfileSmall.vue";
import PublicSidebar from "@widget/public/Sidebar.vue";
import PublicSign from "@widget/public/Sign.vue";
import PublicTopbar from "@widget/public/Topbar.vue";

export function widgetRegistrator(app: any) {
  app.component("wadm-menu", AdminMenu);
  app.component("wath-card", AuthCard);
  app.component("wpub-menu", PublicMenu);
  app.component("wpub-offcanvas", PublicOffcanvas);
  app.component("wpub-profile-lg", PublicProfileLarge);
  app.component("wpub-profile-sm", PublicProfileSmall);
  app.component("wpub-sidebar", PublicSidebar);
  app.component("wpub-sign", PublicSign);
  app.component("wpub-topbar", PublicTopbar);
}
