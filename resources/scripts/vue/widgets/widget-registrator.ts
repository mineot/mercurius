import AdminMenu from "@widget/admin/AdminMenu.vue";
import AuthCard from "@widget/auth/AuthCard.vue";
import PublicMenu from "@widget/public/PublicMenu.vue";
import PublicOffcanvas from "@widget/public/PublicOffcanvas.vue";
import PublicProfileSmall from "@widget/public/PublicProfileSmall.vue";
import PublicSidebar from "@widget/public/PublicSidebar.vue";
import PublicTopbar from "@widget/public/PublicTopbar.vue";

export function widgetRegistrator(app: any) {
  app.component("wadm-menu", AdminMenu);
  app.component("wath-card", AuthCard);
  app.component("wpub-menu", PublicMenu);
  app.component("wpub-offcanvas", PublicOffcanvas);
  app.component("wpub-profile-sm", PublicProfileSmall);
  app.component("wpub-sidebar", PublicSidebar);
  app.component("wpub-topbar", PublicTopbar);
}
