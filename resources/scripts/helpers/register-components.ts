import AppButton from "@component/AppButton.vue";
import AppCheckbox from "@component/AppCheckbox.vue";
import AppFlexColumn from "@component/AppFlexColumn.vue";
import AppFlexRow from "@component/AppFlexRow.vue";
import AppPassword from "@component/AppPassword.vue";
import AppPasswordConfirm from "@component/AppPasswordConfirm.vue";
import AppText from "@component/AppText.vue";

import PublicLayout from "@publicPage/components/PublicLayout.vue";
import PublicMenu from "@publicPage/components/PublicMenu.vue";
import PublicOffcanvas from "@publicPage/components/PublicOffcanvas.vue";
import PublicSidebar from "@publicPage/components/PublicSidebar.vue";
import PublicTopbar from "@publicPage/components/PublicTopbar.vue";

import AuthLayout from "@authPage/components/AuthLayout.vue";
import AuthCard from "@authPage/components/AuthCard.vue";

import AdminLayout from "@adminPage/components/AdminLayout.vue";

export function registerComponents(app: any) {
  app.component("app-btn", AppButton);
  app.component("app-checkbox", AppCheckbox);
  app.component("app-flex-column", AppFlexColumn);
  app.component("app-flex-row", AppFlexRow);
  app.component("app-pswd-confirm", AppPasswordConfirm);
  app.component("app-pswd", AppPassword);
  app.component("app-text", AppText);

  app.component("public-layout", PublicLayout);
  app.component("public-menu", PublicMenu);
  app.component("public-offcanvas", PublicOffcanvas);
  app.component("public-sidebar", PublicSidebar);
  app.component("public-topbar", PublicTopbar);

  app.component("auth-layout", AuthLayout);
  app.component("auth-card", AuthCard);

  app.component("admin-layout", AdminLayout);
}
